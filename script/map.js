function updateMap{

    let frame = document.getElementById("map").src;
    let dest = document.booking.destination.value;
    
    if(dest=="Joffre Lake"){
        frame="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.848247942528!2d-122.49829036305228!3d50.368837266185004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5480c8c4bf215ce9%3A0xe7f6d402364ef491!2sLower%20Joffre%20Lake!5e0!3m2!1sen!2sca!4v1680884810182!5m2!1sen!2sca"; 
    
    }
    else if(dest=="Grouse Grind"){
        frame="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.9913264441316!2d-123.1006120839449!3d49.371237079341114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f458d5468b3%3A0x73a60976c7a6a4e7!2sGrouse%20Grind%20Trail!5e0!3m2!1sen!2sca!4v1680885819423!5m2!1sen!2sca";

    }
    
}