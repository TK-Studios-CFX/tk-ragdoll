author 'TK Studios'
description 'TK Studios - Ragdoll.'
url 'https://buy.tkstudios.store'
version '1.0.3'

fx_version 'cerulean'
game {'gta5'}

dependencies {
    "tk-lib",
}

client_scripts {
    'client/index.js',
}

server_scripts {
    'server/index.js',
}

ui_page 'ui/index.html' 

files { 
    'ui/index.html', 
    'ui/index.css', 
    'ui/index.js', 
}