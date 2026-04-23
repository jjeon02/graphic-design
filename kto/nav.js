document.getElementById('nav-top').innerHTML = `
    <img src="src/0_element/arrow_nav.png" id="icon">
    <p class="nav-links">
        <a href="1_intro.html" >Intro</a>
        <a href="2_korean.html">Basic Korean</a>
        <a href="3_essay.html">Essay</a> 
        <a href="4_sketch.html">Sketches</a>
        <a href="5_timeline.html">Timeline</a>
        <a href="6_archive.html">Archive</a>
    </p>
    <p class="nav-menu pointer" onclick="toggleMenu()" >Menu</p>
`;

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navMenu = document.querySelector('.nav-menu');
    const isOpen = navLinks.classList.toggle('open');
    navMenu.textContent = isOpen ? 'Close' : 'Menu';
}