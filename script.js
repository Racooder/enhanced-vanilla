const themeList = ['light-mode', 'dark-mode'];

function onLoad()
{
    document.body.style.opacity='1';
    parallax();
    betterCursor();
    setTheme(false);
}

function parallax()
{
    var scenes = document.getElementsByClassName('scene');

    for (var scene of scenes)
    {
        var parallaxInstance = new Parallax(scene);
    }
}

function betterCursor(){
    const cursor = document.querySelector('.cursor');
    const cursorSpot = document.querySelector('.cursor-spot');
    
    document.addEventListener('mousemove', e => {
        cursor.style.cssText = cursorSpot.style.cssText = `top: ${e.clientY}px; left: ${e.clientX}px;`;
    });
}

function setTheme(doSwitch = true)
{
    const currentTheme = localStorage.getItem('theme') || themeList[0];
    const themeHolder = document.body;
    let newTheme = currentTheme;
    if (doSwitch)
        newTheme = themeList[(themeList.indexOf(currentTheme) + 1) % themeList.length];
    for (const theme of themeList)
    {
        themeHolder.classList.remove(theme);
    }
    themeHolder.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
}


