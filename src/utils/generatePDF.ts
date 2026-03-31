import { jsPDF } from 'jspdf';
import resumeData from '../data/resume.json';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  let y = 20;
  const margin = 20;
  const pageWidth = doc.internal.pageSize.width;
  const maxWidth = pageWidth - margin * 2;

  const addText = (text: string, fontSize: number, isBold: boolean = false, align: 'left' | 'center' = 'left', indent: number = 0) => {
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    doc.setFontSize(fontSize);
    
    const lines = doc.splitTextToSize(text, maxWidth - indent);
    
    // Check page break
    if (y + (lines.length * fontSize * 0.4) > 280) {
      doc.addPage();
      y = 20;
    }

    lines.forEach((line: string) => {
      if (align === 'center') {
        const textWidth = doc.getStringUnitWidth(line) * fontSize / doc.internal.scaleFactor;
        const x = (pageWidth - textWidth) / 2;
        doc.text(line, x, y);
      } else {
        doc.text(line, margin + indent, y);
      }
      y += fontSize * 0.4 + 1.5;
    });
    y += 2;
  };

  const addLine = () => {
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, y - 2, pageWidth - margin, y - 2);
    y += 4;
  };

  // Header
  addText(resumeData.basics.name.toUpperCase(), 16, true, 'center');
  y += 2;
  addLine();
  addText(resumeData.basics.title, 11, false, 'center');
  y += 2;
  addLine();
  
  const contactInfo1 = `Sakri, Dhule, Maharashtra, India | Email:${resumeData.basics.email} | ${resumeData.basics.phone} |`;
  addText(contactInfo1, 10, false, 'center');
  y -= 2;
  const contactInfo2 = `LinkedIn : ${resumeData.basics.links.LinkedIn}`;
  addText(contactInfo2, 10, false, 'center');
  y += 4;

  // Professional Summary
  addText("PROFESSIONAL SUMMARY", 12, true, 'center');
  addLine();
  addText(resumeData.basics.summary, 10, false, 'left');
  y += 4;

  // Technical Skills
  addText("TECHNICAL SKILLS", 12, true, 'left');
  addLine();
  resumeData.skills.forEach(skill => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`${skill.group}:`, margin, y);
    y += 5;
    addText(skill.items.join(', '), 10, false, 'left');
    y += 2;
  });
  y += 2;

  // Certifications
  addText("CERTIFICATION", 12, true, 'center');
  addLine();
  resumeData.certifications.forEach(cert => {
    let certText = `• ${cert.name}`;
    if (cert.issuer) certText += ` - ${cert.issuer}`;
    if (cert.date) certText += ` (${cert.date})`;
    addText(certText, 10, false, 'left', 5);
    if (cert.id) {
      addText(`Credential ID: ${cert.id}`, 9, false, 'left', 10);
    }
  });
  y += 6;

  // Achievements
  addText("ACHIEVEMENTS", 12, true, 'left');
  resumeData.achievements.forEach(ach => {
    addText(`• ${ach.context}`, 10, false, 'left', 5);
  });
  y += 6;

  // Professional Experience
  addText("PROFESSIONAL EXPERIENCE", 12, true, 'left');
  
  // Web Application Security Tester
  const webAppExp = resumeData.experience.find(e => e.role === "Web Application Security Tester");
  if (webAppExp) {
    addText(webAppExp.role, 11, true, 'left');
    y -= 2;
    addText(`Location: ${webAppExp.location}`, 10, false, 'left');
    y += 2;
    webAppExp.bullets.forEach(bullet => {
      addText(`• ${bullet}`, 10, false, 'left', 5);
    });
    y += 4;
  }

  // Red Team Experience
  addText("RED TEAM EXPERIENCE", 12, true, 'left');
  const redTeamExp = resumeData.experience.find(e => e.role === "Red Team Experience");
  if (redTeamExp) {
    redTeamExp.bullets.forEach(bullet => {
      addText(`• ${bullet}`, 10, false, 'left', 5);
    });
    y += 4;
  }

  // Projects
  addText("PROJECTS", 12, true, 'left');
  resumeData.projects.forEach(proj => {
    addText(proj.title, 11, true, 'left');
    proj.bullets.forEach(bullet => {
      addText(`• ${bullet}`, 10, false, 'left', 5);
    });
    y += 4;
  });

  // Training & Lab Experience
  addText("TRAINING & LAB EXPERIENCE", 12, true, 'left');
  resumeData.extra.forEach(item => {
    addText(item.replace('Training & Lab Experience: ', ''), 10, false, 'left');
  });

  doc.save(`${resumeData.basics.name.replace(' ', '_')}_Resume.pdf`);
};
