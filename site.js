"use strict";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleWords(text, separator) {
  return shuffle(text.split(separator)).join(" ");
}

function typeText(targetElement, text) {
  let letter = 0;
  function writeCharacter() {
    targetElement.textContent += text[letter++];
    if (letter == text.length) {
      targetElement.className = ["eol", targetElement.className].join(" ");
      clearInterval(timeout);
    }
  }
  const timeout = setInterval(writeCharacter, 130);
}

function getBackgroundKeywords() {
  const keywords =
  "JAVA,BEHAVIOUR DRIVEN DEVELOPMENT,TOMCAT,KANBAN,SPRING FRAMEWORK,C++,JS,ANDROID," +
  "SCRUM,JAKARTA EE,PYSIDE2,PYTEST,SQL,HTTP,XML,SVG,CODE COVERAGE,GIT,JMETER,WEBGL,REFACTORING," +
  "DOCKER,QT,JENKINS,MOCK,ASYNCIO,LINUX,CUCUMBER,THREE.JS,DEPLOIEMENT CONTINU,GNU," +
  "JSON,CSS,PYTHON,CLEAN CODE,MYSQL,ANSIBLE,HATEOAS,HIBERNATE,EXTREME PROGRAMMING,JUNIT," +
  "API WEB,SELENIUM,ANGULAR,DEVOPS,PYTEST,HTML5,JPA,SUBVERSION,LXD/LXC,MAVEN,KOTLIN," +
  "HTTP/2,AGILE,BASH,GERKHIN,TEST DRIVEN DEVELOPMENT,ORACLE,C,LEAN,CMAKE,JPA,ORM," +
  "UML,MVC,N-TIERS,DESIGN PATTERNS,DOMAIN DRIVEN DEVELOPMENT,TEST ACCEPTATION," +
  "TEST UNITAIRE,REACT,JAVASCRIPT,LUA,SPRING BOOT";
  return shuffleWords(keywords, ",");
}

function updateBackgroundHeight() {
  document.getElementById("background").style.height = (document.getElementById("foreground").clientHeight - 5) + "px";
}

function registerIconMessageListener() {
  function updateIconMessage(message) {
    for(let e of document.getElementsByClassName("icon-message")) {
      e.innerText = message;
    }
  }

  for(let e of document.getElementsByClassName("icon")) {
    e.addEventListener("mouseover", updateIconMessage.bind(null, e.parentElement.dataset.title));
    e.addEventListener("mouseout", updateIconMessage.bind(null, ""));
  }
}

function writeOnTerminal() {
  setTimeout(function() {
      let terminalLine = document.getElementById("terminal-line");
      terminalLine.className = "";
      typeText(terminalLine, terminalLine.dataset.message);
    },
    1900);
}

function rot13(e) {
  return e.replace(/[a-zA-Z]/g,function(e){
    return String.fromCharCode((e<="Z"?90:122)>=(e=e.charCodeAt(0)+13)?e:e-26)
  })
}

function alpha2num(e) {
  return e.replace(/[A-J]/g,function(e){
    return String.fromCharCode(e.charCodeAt(0)-17)
  })
}

function unobfuscemail(e) {
  e = rot13(e);
  for(let a of document.getElementsByClassName("obfuscemail")){
    a.href = "mailto:" + e;
    a.dataset.title = a.dataset.title.replace("{}", e);
  }
}

function unobfuscetel(e, e2) {
  e = alpha2num(e);
  e2 = alpha2num(e2);
  for(let a of document.getElementsByClassName("obfuscetel")){
    a.href = "tel:" + e;
    a.dataset.title = a.dataset.title.replace("{}", e2);
  }
}

window.addEventListener("load", unobfuscemail.bind(null, "qnivq@tnlrevr.qri"));
window.addEventListener("load", unobfuscetel.bind(null, "+DDHGGHDHHFD", "AH.GG.HD.HH.FD"));
window.addEventListener("load", updateBackgroundHeight);
window.addEventListener("resize", updateBackgroundHeight);
window.addEventListener("orientationchange", updateBackgroundHeight);
window.addEventListener("load", registerIconMessageListener);
window.addEventListener("load", writeOnTerminal);

