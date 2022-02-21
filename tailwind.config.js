module.exports = {
    content: ["*.{html,js}"],
    theme: {  
    extend: {
        backgroundImage: {       
            'hero-pattern': "url('https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg')",      
        }
    }
},
plugins: [ require('flowbite/plugin')],
}