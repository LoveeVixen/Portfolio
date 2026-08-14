// KHOGDEN
class Subject
{
    constructor(header, paragraphs)
    {
        this.header = header;
        this.paragraphs = paragraphs;
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
        content.innerHTML += "<h3>" + project.subjects[i].header + "</h3>"
        for(let e = 0; e < project.subjects[i].paragraphs.length; e++)
        {
            content.innerHTML += "<p>" + project.subjects[i].paragraphs[e] + "</p>";
        }

        content.innerHTML += "</br>";
    }
}

// Usable labels.
var cpp = new Label("C++", "#176cff");
var cSharp = new Label("C#", "#4589ff");
var js = new Label("JavaScript", "#7c6500");
var html = new Label("HTML", "#df6f06");
var oop = new Label("OOP", "#9d5b1e");
var unity = new Label("Unity Engine", "#2a2b2b");
var unreal = new Label("Unreal Engine", "#912a2a");
var levelDesign = new Label("Level Design", "#d30094");
var research = new Label("Research", "#d36104");
var scrum = new Label("SCRUM", "#7a0d4f");


// My projects.


// Final year project
var finalProject = new Project("Final Project");
finalProject.media = "<img src='Images/infinitecosmos.png' alt='Final project' width='400'>";
finalProject.labels.push(cSharp);
finalProject.labels.push(research);

finalProject.subjects.push(new Subject(
    "Summary",
    [
        "This is my final year project I completed at University of Greenwich. During this project, I was researching on adaptive soundtracks.",
        "Paragraph 2"
    ]
));

// Brighton Love Match
var brighton = new Project("Brighton Love Match");
brighton.media = "<img src='Images/brightonlovematch.png' alt='Brighton Love Match' width='400'>";
brighton.labels.push(cSharp);

brighton.subjects.push(new Subject(
    "Summary",
    [
        "Paragraph 1",
        "Paragraph 2"
    ]
));

// Reverse Venom
var reverseVenom = new Project("Reverse Venom");
reverseVenom.media = "<img src='Images/reversevenom.png' alt='Reverse Venom' width='400'>";
reverseVenom.labels.push(js);
reverseVenom.labels.push(html);
reverseVenom.labels.push(levelDesign);
reverseVenom.labels.push(oop);

reverseVenom.subjects.push(new Subject(
    "Summary",
    [
        "Reverse Venom is my submission for <a href='https://itch.io/jam/mini-jam-208-inverted'>Mini Jam 208: Inverted.</a> I wanted to use this game jam to challenge myself at making a game project outside of a game engine.",
        "With the keyword 'Inverted' and the limitation of the game jam being 'Enemies to weapons', I had the idea of a game where two opponents are put in an arena with a snake, which can be manipulated to target one player."
    ]
));

reverseVenom.subjects.push(new Subject(
    "Design Phase",
    [
        "I spent the first day making a quick prototype design on paper. I started out with writing bulletin points for to define a basic idea of the game.",
        "A simple sketch was made of what the level layout would be, showing that the game would be on a top-down view of a open field. It also includes where both players and the snake would spawn.",
        "The bottom right corner of the first page shows the inputs for both players. I wanted to keep inputs simple, five buttons to use for each player. (Four directional inputs for moving, and a jump input.)",
        "<img src='Images/reversevenom_pseudocode_0.jpg' alt='Design page 1' width='400'> <img src='Images/reversevenom_pseudocode_1.jpg' alt='Design page 2' width='400'>",
    ]
));

reverseVenom.subjects.push(new Subject(
    "Day 2",
    [
        "",
    ]
));

reverseVenom.subjects.push(new Subject(
    "Day 3",
    [
        "",
    ]
));

reverseVenom.subjects.push(new Subject(
    "Media",
    [
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/A_-RlTP4Oj8?si=tiSrnm567lhG3YMT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        '<a href="https://love-vixen.itch.io/reverse-venom">Click here to see the Itch.io page, where the game can be played.</a>'
    ]
));