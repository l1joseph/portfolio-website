import React from 'react';

const Home = () => (
  <div className="home">
    <section id="about" className="intro">
      <h2>Bioengineering: Bioinformatics Student</h2>
      <p>UCSD 2025 | La Jolla, CA | San Jose, CA</p>
      <p>Dedicated to leveraging computational analysis in genomics and bioinformatics. Experienced in developing machine learning algorithms, conducting NGS data analysis, and implementing bioinformatics pipelines.</p>
    </section>

    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>Knight Lab - University of California San Diego</h3>
        <p>Dec 2023 - Present</p>
        <ul>
          <li>Assisten in the development and validation of Qupid, a software tool for case-control matching in microbiome studies.</li>
          <li>Conducted cross-sectional shotgun metagenomics analysis to characterize microbial composition, diversity, and differential abundances in ASD fecal samples using tools such as BIRDMAn, Quita, and Qiime2.</li>
          <li>Developed and implemented a comprehensive bioinformatics pipeline integrating advanced machine learning techniques to identify ASD diagnosis from gut microbiome data, enabling potential diagnosis earlier than standard methods and improving overall diagnostic accuracy.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Kaiser Permanente Business Process Undergraduate Intern</h3>
        <p>Jun 2023 - Sep 2023</p>
        <ul>
          <li>Managed and resolved over 11,000 errors during data migration.</li>
          <li>Developed efficient scripts, reducing daily error volume from 2000 to less than 500.</li>
          <li>Successfully managed and resolved over 11,000 errors during data migration from legacy databases, and assisted in a reduction of inbound error rate to less than 1.5%.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Clear Labs Research and Development Intern</h3>
        <p>Jun 2021 - Aug 2021</p>
        <ul>
          <li>Conducted end-to-end NGS sequencing runs on ONT Nanopore platform, from extracted RNA to flow cell loading including two-step PCR, library prep, quantification via Qubit, and SPRI cleanup.</li>
          <li>Conducted bioinformatic analysis of SARS-COV-2 data using Python and R and used data-driven machine learning algorithms to develop unique DNA Primers for NGS.</li>
          <li>Analyzed 200 COVID-19 FDA EUAs to determine patterns in diagnostic strategies and niches in the market.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Cisco Software Engineer Intern</h3>
        <p>Jun 2021 - Aug 2021</p>
        <ul>
          <li>Aided in the development of an advanced network analytics tool that collects time-series data and uses AI-based anomaly detection to identify deviations from normal operation and provide end-to-end network insights.</li>
          <li>Successfully monitored a network of over 5,000 users and 10,000 devices.</li>
          <li>Built features to monitor, analyze, and troubleshoot the complete path across private and public networks.</li>
        </ul>
      </div>
      {/* Add more experience items as needed */}
    </section>

    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Alexandrov Lab - University of California San Diego</h3>
        <p>Jun 2024 - Present</p>
        <ul>
          <li>Developed a machine learning algorithm to detect Homologous Recombination Deficiency (HRD) from RNA-sequencing data.</li>
          <li>Used multi-task learning to integrate clinical data for enhanced prognostic capabilities.</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>Skywalker V2 Software Sub-Lead</h3>
        <p>Nov 2022 - Jun 2023</p>
        <ul>
          <li>Built a low-cost functional prosthetic arm using CNC machining and 3D printing.</li>
          <li>Created a bioamplifier from the ground up in order to process & clean raw EMG signals by 95%.</li>
          <li>Developed a neural network to quantify EMG data into mechanical motion with 87% accuracy.</li>
        </ul>
      </div>
    </section>

    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p>Python (Tensorflow, Pytorch, scikit-learn), R, Java, C++, HTML/CSS, Flask, JavaScript, React, GitHub, AWS, Azure</p>
    </section>
  </div>
);

export default Home;
