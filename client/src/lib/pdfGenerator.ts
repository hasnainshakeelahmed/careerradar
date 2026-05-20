import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface PathStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  resources: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface CareerPath {
  id: string;
  name: string;
  icon: string;
  description: string;
  duration: string;
  difficulty: string;
  steps: PathStep[];
  salaryRange: string;
  jobMarket: string;
}

export function generateCareerPathPDF(path: CareerPath) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Set colors
  const primaryColor = [59, 130, 246]; // #3B82F6
  const accentColor = [6, 182, 212]; // #06B6D4
  const darkBg = [5, 8, 18]; // #050812
  const textColor = [255, 255, 255];
  const lightText = [180, 180, 180];

  // Helper function to add text
  const addText = (text: string, size: number, color: number[], isBold: boolean = false) => {
    doc.setFontSize(size);
    doc.setTextColor(...color);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    return text;
  };

  // Header
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 40, 'F');

  doc.setFontSize(28);
  doc.setTextColor(...textColor);
  doc.setFont('helvetica', 'bold');
  doc.text(`${path.icon} ${path.name}`, margin, 20);

  yPosition = 50;

  // Overview Section
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.setFont('helvetica', 'bold');
  doc.text('Overview', margin, yPosition);
  yPosition += 8;

  doc.setFontSize(11);
  doc.setTextColor(...textColor);
  doc.setFont('helvetica', 'normal');
  const descriptionLines = doc.splitTextToSize(path.description, contentWidth);
  doc.text(descriptionLines, margin, yPosition);
  yPosition += descriptionLines.length * 6 + 8;

  // Key Information
  doc.setFontSize(12);
  doc.setTextColor(...primaryColor);
  doc.setFont('helvetica', 'bold');
  doc.text('Key Information', margin, yPosition);
  yPosition += 8;

  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.setFont('helvetica', 'normal');

  const infoData = [
    ['Duration', path.duration],
    ['Difficulty Level', path.difficulty],
    ['Salary Range', path.salaryRange],
    ['Job Market', path.jobMarket],
  ];

  (doc as any).autoTable({
    startY: yPosition,
    head: [['Metric', 'Value']],
    body: infoData,
    margin: { left: margin, right: margin },
    headStyles: {
      fillColor: primaryColor,
      textColor: textColor,
      fontStyle: 'bold',
      fontSize: 11,
    },
    bodyStyles: {
      textColor: textColor,
      fontSize: 10,
    },
    alternateRowStyles: {
      fillColor: [20, 30, 50],
    },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 15;

  // Roadmap Steps
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.setFont('helvetica', 'bold');
  doc.text('Roadmap Steps', margin, yPosition);
  yPosition += 12;

  // Add each step
  path.steps.forEach((step, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    // Step number and title
    doc.setFontSize(12);
    doc.setTextColor(...accentColor);
    doc.setFont('helvetica', 'bold');
    doc.text(`Step ${index + 1}: ${step.title}`, margin, yPosition);
    yPosition += 8;

    // Duration and difficulty
    doc.setFontSize(9);
    doc.setTextColor(...lightText);
    doc.setFont('helvetica', 'normal');
    doc.text(`Duration: ${step.duration} | Difficulty: ${step.difficulty}`, margin, yPosition);
    yPosition += 6;

    // Description
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    const descLines = doc.splitTextToSize(step.description, contentWidth);
    doc.text(descLines, margin, yPosition);
    yPosition += descLines.length * 5 + 4;

    // Skills
    doc.setFontSize(10);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Key Skills:', margin, yPosition);
    yPosition += 5;

    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const skillsText = step.skills.join(', ');
    const skillsLines = doc.splitTextToSize(skillsText, contentWidth - 5);
    doc.text(skillsLines, margin + 5, yPosition);
    yPosition += skillsLines.length * 4 + 3;

    // Resources
    doc.setFontSize(10);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommended Resources:', margin, yPosition);
    yPosition += 5;

    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    step.resources.forEach((resource) => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(`• ${resource}`, margin + 5, yPosition);
      yPosition += 4;
    });

    yPosition += 6;

    // Separator line
    doc.setDrawColor(...accentColor);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 8;
  });

  // Footer
  const totalPages = (doc as any).internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...lightText);
    doc.text(
      `Career Radar - ${path.name} | Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  const fileName = `${path.name.replace(/\s+/g, '-').toLowerCase()}-roadmap.pdf`;
  doc.save(fileName);
}
