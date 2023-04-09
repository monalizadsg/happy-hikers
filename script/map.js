function updateMap(){

    let frame = document.getElementById("map").src;
    let dest = document.booking.destination.value;

    
    switch (dest) {
        case "Joffre Lake":
            document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.848247942528!2d-122.49829036305228!3d50.368837266185004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5480c8c4bf215ce9%3A0xe7f6d402364ef491!2sLower%20Joffre%20Lake!5e0!3m2!1sen!2sca!4v1680884810182!5m2!1sen!2sca";
          break;
        case "Grouse Grind":
            document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.9913264441316!2d-123.1006120839449!3d49.371237079341114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f458d5468b3%3A0x73a60976c7a6a4e7!2sGrouse%20Grind%20Trail!5e0!3m2!1sen!2sca!4v1680885819423!5m2!1sen!2sca";
          break;
        case "Lynn Canyon":
            document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599.4343815875636!2d-123.02024868394555!3d49.343926479338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867a9c7799fbf7%3A0x7b67b208aabca398!2sLynn%20Canyon%20Ecology%20Centre!5e0!3m2!1sen!2sca!4v1680887317497!5m2!1sen!2sca";
          break;
        case "Panorama Ridge":
            document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31633.772274451512!2d-123.1039033633413!3d49.95508004411184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54871e633073913d%3A0x35170f0f19596247!2sPanorama%20Ridge!5e0!3m2!1sen!2sca!4v1680887378224!5m2!1sen!2sca";
          break;
        case "Quarry Rock":
            document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.1726524899454!2d-122.95169028394608!3d49.32994997933644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867a525a304e1f%3A0x48a1f87821346d11!2sQuarry%20Rock%20Hike!5e0!3m2!1sen!2sca!4v1680887420844!5m2!1sen!2sca";
          break;
        case "Golden Ears":
            document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.0505859110913!2d-122.51759448394759!3d49.27543867933058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54869bd73dbdfb2d%3A0x47eb916fa3f59e82!2sGolden%20Ears%20Provincial%20Park!5e0!3m2!1sen!2sca!4v1680887573296!5m2!1sen!2sca";
          break;
      }
    
}