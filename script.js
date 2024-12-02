function changeTemplate() {
  const selectedTemplate = document.getElementById("template").value;
  const resumeContainer = document.getElementById("resume");

  // Reset content
  resumeContainer.innerHTML = "";

  // Create elements for the live preview
  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const contact = document.getElementById("contact").value;
  const linkedin = document.getElementById("linkedin").value;
  const summary = document.getElementById("summary").value;
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const certifications = document.getElementById("certifications").value;

  // Add content to preview
  const resumeHTML = `
    <div class="resume-content">
      <h2>Name:${name}</h2>
      <h3>Professional Title:${title}</h3>
      <p><strong>Contact Info:</strong> ${contact}</p>
      <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
      <h4>Professional Summary:</h4>
      <p>${summary}</p>
      <h4>Experience:</h4>
      <p>${experience}</p>
      <h4>Education:</h4>
      <p>${education}</p>
      <h4>Skills:</h4>
      <p>${skills}</p>
      <h4>Certifications:</h4>
      <p>${certifications}</p>
    </div>
  `;

  resumeContainer.innerHTML = resumeHTML;

  // Apply template styles
  resumeContainer.className = selectedTemplate; // Apply the class based on selected template
}
// Function to print the resume
function printResume() {
  const resumeContent = document.getElementById("resume");

  // Open a new window and print the content
  const printWindow = window.open("", "", "height=600,width=800");
  printWindow.document.write("<html><head><title>Print Resume</title>");
  printWindow.document.write(
    `<style>
  /* Beautiful and Elegant Print Styling */
  @media print {
    body {
      margin: 0;
      padding: 30px;
      background-color: #f4f7fc;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 12pt;
      color: #333;
    }

    /* Resume Container */
    #resume {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      background: #ffffff;
      border: 1px solid #e1e1e1;
      border-radius: 12px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    /* Title styling */
    h1 {
      font-size: 32pt;
      font-weight: bold;
      text-align: center;
      color: #2c3e50;
      margin: 0;
      padding-bottom: 5px;
    }

    /* Subtitle (professional title) styling */
    h2 {
      font-size: 18pt;
      font-weight: 300;
      text-align: center;
      color: #7f8c8d;
      margin-top: 5px;
      margin-bottom: 30px;
    }

    /* Section headings (Experience, Education, etc.) */
    .section h3 {
      font-size: 16pt;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 15px;
      border-bottom: 2px solid #e1e1e1;
      padding-bottom: 5px;
    }

    /* Section content (Experience, Education, etc.) */
    .section p {
      font-size: 12pt;
      color: #34495e;
      line-height: 1.6;
      margin: 10px 0;
    }

    /* Skills section */
    .skills ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }

    .skills li {
      font-size: 12pt;
      color: #34495e;
      background-color: #ecf0f1;
      padding: 8px 12px;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    /* Certifications section */
    .certifications ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .certifications li {
      font-size: 12pt;
      color: #34495e;
      background-color: #f4f7fc;
      padding: 8px;
      border-radius: 4px;
      margin-bottom: 5px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    /* Contact and social links */
    .contact {
      margin-top: 30px;
      text-align: center;
      font-size: 12pt;
      color: #34495e;
    }

    .contact a {
      text-decoration: none;
      color: #3498db;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .contact a:hover {
      color: #2980b9;
    }

    /* Add a page number at the footer */
    .footer {
      position: fixed;
      bottom: 10px;
      width: 100%;
      text-align: center;
      font-size: 10pt;
      color: #7f8c8d;
    }

    /* Optional: page break after a section */
    .page-break {
      page-break-before: always;
    }

    /* Remove margins for page */
    @page {
      margin: 20mm;
    }
  }
</style>

`
  );
  printWindow.document.write("</head><body>");
  printWindow.document.write(resumeContent.innerHTML);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.print();
}
