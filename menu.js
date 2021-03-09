const menu = document.getElementById('menu')
const menuItems = menu.children[0].children
const subMenuItems = document.getElementsByClassName("inner-menu")
const menuBackground = document.getElementById('menu-background')

//add hover state for each menu item
const hoverHandler = (menuItem) => {

    menuItem.addEventListener('mouseenter', function( event ) {

        const target = event.target.children[1]

        if(target) {
            target.style.visibility = 'visible'
            target.style.opacity = 1
            menuBackground.style.visibility = 'visible'

            //Get width of sub menu items
            const widthInnerMenu = target.offsetWidth  + 'px'
            menuBackground.style.width = widthInnerMenu

            const distanceFromLeft = target.offsetLeft
            const distanceFromTop = target.offsetTop

            //Set menuBackground to position of innerMenu
            menuBackground.style.top = distanceFromTop + 'px'
            menuBackground.style.left = distanceFromLeft  + 'px'  

            //Set Height Menu Background to same as innerMenu
            const targetHeight = target.offsetHeight + 'px'
            menuBackground.style.height = targetHeight

        }
    })

    menuItem.addEventListener('mouseleave', function( event ) {
        const target = event.target.children[1]
        if(target) {
            target.style.opacity = 0
            target.style.visibility = 'hidden'
            menuBackground.style.visibility = 'hidden'
        }
    })

}


Object.entries(menuItems).map(item => {
    hoverHandler(item[1])
})


