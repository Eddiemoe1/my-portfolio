import './Home.css'; // Reuse same styling as Home

function About() {
  return (
    <div className="home-container">
      <div className="home-content">
        
        <h1>About Me</h1>
        <p className="subtitle">Passionate Full-Stack Developer</p>
        <p className="intro">
          I'm a software and blockchain developer with a passion for building secure, scalable, and decentralized applications. 
          I specialize in crafting full-stack solutions and smart contracts that push the boundaries of what's possible on-chain and off-chain.
        </p>

        <p className="paragraph" >
          🔹 Experienced in building responsive web applications using React, JavaScript, typescript, next.js and modern CSS frameworks <br />
          🔹 Focused on blockchain development, primarily writing smart contracts using Solidity <br />
          🔹 Experienced in deploying and testing contracts on Ethereum and compatible networks <br />
          🔹 Skilled backend developer with strong expertise in C#, .NET Core, and building RESTful APIs <br />
          🔹 Interested in full-stack development and integrating blockchain with modern web technologies <br />
          🔹 Passionate about continuous learning in crypto security, cloud computing, and automation <br />
        </p>

        <h2 className="subtitle" style={{ marginTop: '1rem' }}><b>Tech Stack</b></h2>
        <div className="icon-grid">
        
          <i className="devicon-solidity-plain colored" title="Solidity"></i>
          <i className="devicon-ethereum-plain colored" title="Ethereum"></i>

      
          <i className="devicon-csharp-plain colored" title="C#"></i>
          <i className="devicon-dotnetcore-plain colored" title=".NET Core"></i>
          <i className="devicon-nodejs-plain colored" title="Node.js"></i>
          <i className="devicon-php-plain colored" title="PHP"></i>
          <i className="devicon-firebase-plain colored" title="Firebase"></i>

          <i className="devicon-cplusplus-plain colored" title="C++"></i>
          <i className="devicon-c-plain colored" title="C"></i>
          <i className="devicon-java-plain colored" title="Java"></i>
          <i className="devicon-javascript-plain colored" title="JavaScript"></i>
          <i className="devicon-go-plain colored" title="Go"></i>
          <i className="devicon-dart-plain colored" title="Dart"></i>

          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-flutter-plain colored" title="Flutter"></i>
          <i className="devicon-html5-plain colored" title="HTML5"></i>
          <i className="devicon-wordpress-plain colored" title="WordPress"></i>
          <i className="devicon-figma-plain colored" title="Figma"></i>

       
          <i className="devicon-mysql-plain colored" title="MySQL"></i>
          <i className="devicon-sqlite-plain colored" title="SQLite"></i>

     
          <i className="devicon-git-plain colored" title="Git/GitHub"></i>
          <i className="devicon-docker-plain colored" title="Docker"></i>
          <i className="devicon-azure-plain colored" title="Azure"></i>
          <i className="devicon-visualstudio-plain colored" title="Visual Studio"></i>
          <i className="devicon-vscode-plain colored" title="VS Code"></i>

          
        </div>
      </div>
    </div>
  );
}

export default About;
