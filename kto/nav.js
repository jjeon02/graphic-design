document.getElementById('nav-top').innerHTML = `
    <img src="src/assets/arrow_icon.png" id="icon">
    <p class="nav-links">
        <a href="index.html" >Intro</a>
        <a href="1_korean.html">Basic Korean</a>
        <a href="2_essay.html">Essay</a> 
        <a href="3_sketch.html">Sketches</a>
        <a href="4_timeline.html">Timeline</a>
        <a href="5_archive.html">Archive</a>
    </p>
    <p class="nav-menu pointer" onclick="toggleMenu()" >Menu</p>
`;

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navMenu = document.querySelector('.nav-menu');
    const isOpen = navLinks.classList.toggle('open');
    navMenu.textContent = isOpen ? 'Close' : 'Menu';
}