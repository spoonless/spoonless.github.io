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
  "SCRUM,JAKARTA EE,PYSIDE2,SQL,HTTP,XML,SVG,CODE COVERAGE,GIT,JMETER,WEBGL,REFACTORING," +
  "DOCKER,QT,JENKINS,MOCK,BLENDER,ASYNCIO,LINUX,CUCUMBER,THREE.JS,DEPLOIEMENT CONTINU," +
  "JSON,CSS,PYTHON,CLEAN CODE,MYSQL,ANSIBLE,HATEOAS,HIBERNATE,EXTREME PROGRAMMING,JUNIT," +
  "API WEB,SELENIUM,ANGULAR,DEVOPS,PYTEST,BLE,HTML5,JPA,SUBVERSION,LXD/LXC,MAVEN,KOTLIN," +
  "HTTP/2,AGILE,BASH,GERKHIN,TEST DRIVEN DEVELOPMENT,ORACLE,C,LEAN,MAKE";
  return shuffleWords(keywords, ",");
}

