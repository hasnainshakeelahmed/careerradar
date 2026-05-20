import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || "career-radar-uploads";

/**
 * Upload a file to S3 storage
 * @param fileKey - Unique identifier for the file (e.g., "resumes/user-123-resume.pdf")
 * @param fileBuffer - File content as Buffer or Uint8Array
 * @param mimeType - MIME type of the file (e.g., "application/pdf")
 * @returns Object with key and url
 */
export async function storagePut(
  fileKey: string,
  fileBuffer: Buffer | Uint8Array | string,
  mimeType: string
): Promise<{ key: string; url: string }> {
  try {
    const buffer = typeof fileBuffer === "string" ? Buffer.from(fileBuffer) : fileBuffer;

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
      Body: buffer,
      ContentType: mimeType,
    });

    await s3Client.send(command);

    // Return the storage path that will be served via /manus-storage/
    const url = `/manus-storage/${fileKey}`;
    return { key: fileKey, url };
  } catch (error) {
    console.error("[Storage] Failed to upload file:", error);
    throw error;
  }
}

/**
 * Generate a presigned URL for downloading a file from S3
 * @param fileKey - The S3 object key
 * @param expiresIn - Expiration time in seconds (default: 3600 = 1 hour)
 * @returns Object with key and presigned URL
 */
export async function storageGet(
  fileKey: string,
  expiresIn: number = 3600
): Promise<{ key: string; url: string }> {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn });
    return { key: fileKey, url };
  } catch (error) {
    console.error("[Storage] Failed to generate presigned URL:", error);
    throw error;
  }
}

/**
 * Generate a unique file key for uploads
 * @param userId - User ID
 * @param fileType - Type of file (e.g., "resume", "portfolio")
 * @param fileName - Original file name
 * @returns Unique file key
 */
export function generateFileKey(userId: number, fileType: string, fileName: string): string {
  const ext = fileName.split(".").pop() || "bin";
  const uniqueId = nanoid(8);
  return `uploads/${userId}/${fileType}/${uniqueId}.${ext}`;
}
