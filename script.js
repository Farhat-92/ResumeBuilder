// Function to update live preview
function updatePreview() {
  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const contact = document.getElementById("contact").value;
  const linkedin = document.getElementById("linkedin").value;
  const summary = document.getElementById("summary").value;
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const certifications = document.getElementById("certifications").value;
  const template = document.getElementById("template").value;

  const resume = document.getElementById("resume");
  resume.className = template;
  resume.innerHTML = `
        <h2><strong>Name:</strong> ${name}</h2>
        <h4><strong>Professional title:</strong> ${title}</h4>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <h3>Professional Summary</h3>
        <p><strong>Professional Title:</strong>${summary}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Certifications</h3>
        <p>${certifications}</p>
    `;
}

// Attach updatePreview to form input changes
document.getElementById("resume-form").addEventListener("input", updatePreview);

// Function to print the resume
function printResume() {
  const printContent = document.getElementById("resume").innerHTML;
  const win = window.open("", "", "width=800,height=600");
  win.document.write(`<html><body>${printContent}</body></html>`);
  win.document.close();
  win.print();
}

// Function to download the resume as a PDF
function downloadPDF() {
  const element = document.getElementById("resume");
  html2pdf()
    .from(element)
    .set({
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .save();
}

// Load html2pdf library
const script = document.createElement("script");
script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js";
document.head.appendChild(script);
