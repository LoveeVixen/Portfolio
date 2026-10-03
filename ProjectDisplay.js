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
var cSound = new Label("CSound", "#378cfc");
var oop = new Label("OOP", "#9d5b1e");
var unity = new Label("Unity Engine", "#5d5f5f");
var unreal = new Label("Unreal Engine", "#912a2a");
var levelDesign = new Label("Level Design", "#d30094");
var research = new Label("Research", "#d36104");
var scrum = new Label("SCRUM", "#7a0d4f");
var github = new Label("GitHub", "#754ada");


// My projects.


// Final year project
var finalProject = new Project("Final Project");
finalProject.media = "<img src='Images/infinitecosmos.png' alt='Final project' width='400'>";
finalProject.labels.push(unity);
finalProject.labels.push(cSharp);
finalProject.labels.push(cSound);
finalProject.labels.push(levelDesign);
finalProject.labels.push(research);
finalProject.labels.push(github);

finalProject.subjects.push(new Subject(
    "Summary",
    [
        "This is my final year project I completed at University of Greenwich. This project involved research towards a solution for the repetitiveness that comes from linear video-game soundtracks.",
        "Music matters in video-games. Despite the current state of the art with soundtracks however, games still often use linear soundtracks which gradually become tedious and break immersion from player experience. <i>Plut, C. and Pasquier, P. (2019)</i>",
        "This project uses generative music to study immersion within participants while playing."
    ]
));

finalProject.subjects.push(new Subject(
    "Project Pitch",
    [
        "<a href='PDFs/finalprojectpitch.pdf'>Click here to see the project pitch.</a>"
    ]
));

finalProject.subjects.push(new Subject(
    "GitHub",
    [
        "Like most of my university modules I studied on that didn't involve team collaboration, I used GitHub to save my work and continue wherever I left off, whether in the university campus or at home.",
    ]
));

finalProject.subjects.push(new Subject(
    "CSound",
    [
        "During development of the project solution, I was looking for ways to integrate generative music into Unity Engine. My supervisor knew of a music computing system called CSound and recommended it to me, which had it's own Unity package.",
        "While I didn't do CSound programming, I learnt how to implement generative music coded through CSound into Unity as part of my project."
    ]
));

finalProject.subjects.push(new Subject(
    "Media",
    [
        "<iframe src='https://drive.google.com/file/d/1q_CWNehfZ6HrU2obfkbmDyLB1g_Qp5ca/preview' width='640' height='480'></iframe>"
    ]
));

// Brighton Love Match
var brighton = new Project("Brighton Love Match");
brighton.media = "<img src='Images/brightonlovematch.png' alt='Brighton Love Match' width='400'>";
brighton.labels.push(unity);
brighton.labels.push(cSharp);
brighton.labels.push(github);

brighton.subjects.push(new Subject(
    "Summary",
    [
        "A Match Made in Brighton is a submission I collaborated on as team of five in-person for the <a href='https://itch.io/jam/2024-valentines-day-game-jam'>2024 Valentine's Day Game Jam.</a> Participating in this game jam was part of a module I was studying at university for, 'Rapid Prototyping'. I had the role of programming in C#.",
        "<a href='https://itch.io/jam/2024-valentines-day-game-jam/rate/2555421'>Click here to see the game submission and download.</a>"
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
    "Pseudo Code",
    [
        "During the design phase, I took the time to do some small pseudo code to get an idea of what interactable objects the game would need, and what functionalities each object would have.",
        "This especially assisted me in the game's later software development considering the game was being made outside of a game engine.",
        "The only class that was left out of the final submission was the manager class idea.",
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