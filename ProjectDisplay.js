// KHOGDEN
class Subject
{
    constructor(header, description)
    {
        this.header = header;
        this.description = description;
    }
}

class Label
{
    constructor(text, colorHex)
    {
        this.text = text;
        this.colorHex = colorHex;
    }
}

// Stores data about my projects I took credit in.
projects = []; 
class Project
{
    labels = [];
    media = "";
    subjects = [];

    constructor(title)
    {
        this.title = title;
        projects.push(this);
    }
}

// Return a project by it's title.
function FindProject(projectTitle)
{
    for(let i = 0; i < projects.length; i++)
    {
        if(projects[i].title == projectTitle)
            return projects[i];
    }

    return null;
}

// Display project on HTML.
function DisplayProject(projectTitle)
{
    project = FindProject(projectTitle);
    const header = document.getElementById("projectTitle");
    const media = document.getElementById("projectMedia");
    const labels = document.getElementById("projectLabels");
    const content = document.getElementById("projectContent");

    // Display found project.
    header.innerHTML = "</br>" + project.title;
    media.innerHTML = "</br>" + project.media;

    // Display labels/keywords for project.
    labels.innerHTML = "";
    for(let i = 0; i < project.labels.length; i++)
    {
        let label = project.labels[i];
        labels.innerHTML += "<div class='label' style='background-color: " + label.colorHex + "'>" + label.text + "</div> ";
    }

    // Display all subjects of project.
    content.innerHTML = "</br>";
    for(let i = 0; i < project.subjects.length; i++)
    {
        content.innerHTML += "<h3>" + project.subjects[i].header + "</h3>" + project.subjects[i].description + "</br>";
    }
}

// Usable labels.
var cpp = new Label("C++", "#176cff");
var cSharp = new Label("C#", "#4589ff");
var js = new Label("JavaScript", "#7c6500");
var research = new Label("Research", "#d36104");

// My projects.

// Final year project
var finalProject = new Project("Final Project");
finalProject.media = "<img src='Images/infinitecosmos.png' alt='Final project' width='400'>";
finalProject.labels.push(cSharp);
finalProject.labels.push(research);

finalProject.subjects.push(new Subject(
    "Summary",
    "This is my final year project I completed at University of Greenwich. During this project, I was researching on adaptive soundtracks."
));

// Brighton Love Match
var brighton = new Project("Brighton Love Match");
brighton.media = "<img src='Images/brightonlovematch.png' alt='Brighton Love Match' width='400'>";
brighton.labels.push(cSharp);

brighton.subjects.push(new Subject(
    "Summary",
    ""
));

// Reverse Venom
var reverseVenom = new Project("Reverse Venom");
reverseVenom.media = "<img src='Images/reversevenom.png' alt='Reverse Venom' width='400'>";
reverseVenom.labels.push(js);

reverseVenom.subjects.push(new Subject(
    "Summary",
    ""
));