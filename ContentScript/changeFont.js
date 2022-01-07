function changeFont(fontNo) {
    allElements = document.querySelectorAll('*');
    switch(fontNo) {
    case 1:
        // Arial
        for (items of allElements) {
            items.style["font-family"] = 'Arial';
        }
        break;
    case 2:
        // Comic Sans
        for (items of allElements) {
            items.style["font-family"] = 'Comic Sans';
        }
        break;
    case 3:
        // Calibri
        for (items of allElements){
            items.style["font-family"] = 'Calibri';
        }
        break;
    case 4:
        // Verdana
        for (items of allElements){
            items.style["font-family"] = 'Verdana';
        }
        break;
    case 5:
        // Tahoma
        for (items of allElements){
            items.style["font-family"] = 'Tahoma';
        }
        break;
    case 6:
        // Open Sans
        for (items of allElements){
            items.style["font-family"] = 'Open Sans';
        }
        break;
    case 7:
        // Roboto 
        for (items of allElements){
            items.style["font-family"] = 'Roboto';
        }
        break;
    case 8:
        // Helvetica
        for (items of allElements){
            items.style["font-family"] = 'Helvetica';
        }
        break;
    default:
        break;
    }
}

changeFont(1);