export type BikeType = {
  id: number;
  type: "XC" | "Road" | "DH" | "Enduro" | "Dirt" | "Trails";
  img: string;
  description: string;
  longDescription: string;
};
export const bikesData: BikeType[] = [
  {
    id: 1,
    type: "XC",
    description:
      "For those who love long, fast rides on smooth terrain, our cross-country mountain bikes are the perfect choice. These bikes are lightweight and efficient, making them ideal for covering a lot of ground quickly.",
    img: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwc703fa28/images/full/full_2022_/2022/full_2022_lux-world-cup-cfr-ltd_3140_P01_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F2F2F2",
    longDescription:
      "Cross-country (XC) cycling is a discipline of mountain biking. Cross-country cycling became an Olympic sport in 1996 and is the only form of mountain biking practiced at the Olympics. Cross-country cycling is defined by the terrain on which it is performed. XC courses and trails consist of a mix of rough forest paths and singletrack (also referred to as doubletrack depending on width), smooth fireroads, and even paved paths connecting other trails. Until recently[when?] cross-country trails were deemed 'easy' or 'intermediate', due to the concept that this discipline of mountain biking relies more on physical prowess than technical ability. Cross-country bicycles are some of the lightest mountain bikes, typically between 7.5 and 12.5 kilograms (17 and 28 lb). They usually feature suspension forks in front and often have suspension in the rear. In both the front and rear, most XC bicycles have approximately 100 millimetres (10.0 cm; 3.9 in) of suspension travel and max out at 120 millimeters at the front typically (although on occasion it is 130 millimeters) and 120 millimeters in the rear, although some riders prefer 125 to 150 millimetres (12.5 to 15.0 cm; 4.9 to 5.9 in) of travel as bicycle frame strength and technology advance, but most mountain bikes past 130mm of suspension on either the front or rear are not regarded as cross-country bikes. The geometry of the frames generally places the rider in a little more upright position than on a road bicycle but much less than on a downhill bike which allows for more nimble handling and better climbing characteristics along with a more comfortable pedaling position at the expense of stability, especially when going downhill. Despite this, most brands are designing their cross-country bikes to have more stable handling, especially when going downhill at the expense of nimble handling and better climbing characteristics, but less so. Bicycle helmets are nearly universally used for cross-country riding.[2] However, XC riders only rarely wear full-face helmets and do not wear the full body 'armor' employed by downhill riders and tend to wear helmets similar to well ventilated road helmets, but helmets most often used by enduro and trail riders are also used. Cross-country cyclists are more prone to injuries than road cyclists; however, the injuries sustained by XC riders are usually not as severe.",
  },
  {
    id: 2,
    type: "Road",
    description:
      "A road bike is the best option for fast rides on asphalt. Thoroughbred racing bikes with carbon or aluminium frames are lighter, faster and more aerodynamic than other bike types.",
    img: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw53683221/images/full/full_2023_/2023/full_2023_ultimate-cfr-di2_3325_P02_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F2F2F2",
    longDescription:
      "The term road bicycle is used to describe bicycles built for traveling at speed on paved roads. Some sources use the term to mean racing bicycle. Other sources specifically exclude racing bicycles from the definition, using the term to mean a bicycle of a similar style but built more for endurance and less the fast bursts of speed desired in a racing bicycle; as such, they usually have more gear combinations and fewer hi-tech racing features. Certain of these bicycles have been referred to as 'sportive' bicycles to distinguish them from racing bicycles. Compared to other styles of bicycle, road bicycles share common features: The tires are narrow, high-pressure (100 psi (700 kPa) or higher), and smooth to decrease rolling resistance The handlebars are bent ('dropped') to allow the rider position to be leaned forward and downward, which reduces the forward vertical cross sectional area and thus highly reduces the air resistance They usually use derailleur gears; however, single-speed and fixed-gear varieties exist (which often are used city-wide, due to simple maintenance from their simple designs). They either use disc brakes or rim brakes (although there might be technical differences, for example road bike calliper brakes use shorter and wider pads than mountain bike cantilevers) The bicycle is of a lightweight construction using materials such as aluminium alloys or carbon fibre. The term road bicycle can also describe any type of bike used primarily on paved roads, in contrast to bikes primarily intended for off-road use, such as mountain bikes. Several variations of road bikes include: Touring bicycles are designed for bicycle touring: they are robust, comfortable, and capable of carrying heavy loads Hybrid bicycles are designed for a variety of recreational and utility purposes. While primarily intended for use on pavement, they may also be used on relatively smooth unpaved paths or trails. Utility bicycles are designed for utility cycling: are a traditional bicycle for commuting, shopping and running errands in towns and cities. A roadster is a specific form of the utility bicycle developed in the UK. Recumbent bicycles are designed for variety of recreational and utility purposes, but are characterised by the reclined riding position in which the cyclist is seated. Vintage road bicycles, also known as classic lightweight bicycles, are generally older bicycles with frames which are manufactured using steel tubing and lugs. Certain examples of this bicycle type have become collectors' items, with potential values of several thousand dollars.[2] Other cyclists prefer this type of bicycle to those manufactured using modern techniques because they are 'practical, versatile, durable, repairable, and timeless, regardless of current popular trends.' A flat bar road bike, also called a fitness bike, is a relatively new style of bicycle. It is simply a road bike fitted with a flat handlebar and MTB-style shifters and brake levers.[4][5] This combination provides a light, fast bike with a more upright riding position that is more comfortable and gives a better view in traffic. Flat bar road bike are commonly used for commuting, urban and fitness riding.",
  },
  {
    id: 3,
    type: "DH",
    description:
      "Our downhill mountain bikes are designed for riders who want to go fast and tackle the most challenging terrain. With long suspension travel and a low centre of gravity, these bikes are built for speed and control.",
    img: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw83eefe7c/images/full/full_2022_/2022/full_2022_sender-cfr-tld_3206_gr-wh_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F2F2F2",
    longDescription:
      "A downhill bike (also known as a downhill mountain bike) is a full suspension bicycle designed for downhill cycling on particularly steep, technical trails. Unlike a typical mountain bike, durability and stability are the most important design features, compared to lighter, more versatile cross-country bikes. Downhill bikes are primarily intended for high-speed descent, and downhill riders will usually push, or shuttle via chairlifts or motorized vehicles, to the trailhead.[1] Downhill bikes share similarities with freeride bikes due to their large strong frames and increased travel. These bikes will also have very slack head tube angles (63 degrees or less),[2] long wheelbases (over 45 inches or 1,143 mm),[2] and will accommodate the use of up to 2.5-inch (63.5 mm) width knobbed tires. Downhill frames are also overbuilt to handle the stress of riding over rocky terrain, drops, and jumps. Bike weights have been typically over 34 lb (15.4 kg), but modern downhill bikes have broken the 30 lb (13.6 kg) weight barrier (with some custom builds on carbon frames weighing between 27-29 pounds) Some newer (2014/5) downhill bikes can be built to weigh under 30 lb (13.6 kg), such as the Trek Session 9.9 or Kona Supreme Operator. Dual crown e-bikes typically weigh 25-35kg. Adjustable head tube angles are also available to adapt the bike to the owner's preferred style of riding. Will typically have 7–10 inches (178–254 mm) of rear suspension travel, and be designed around a 7–8-inch (178–203 mm) suspension fork.[2] The suspension sag is also much higher than cross-country bikes (25%-50% of total travel vs. 10%-20%) for a more supple ride at higher speeds.",
  },
  {
    id: 4,
    type: "Enduro",
    description:
      "For riders who want to tackle more challenging terrain, our enduro bikes are the way to go. These bikes have longer suspension travel and are designed to handle more aggressive riding styles.",
    img: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw4db736cc/images/full/full_2023_/2023/full_2023_3354_spectral-cf-8-cllctv_gy-gy_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F2F2F2",
    longDescription:
      "Enduro in its most basic definition is a type of mountain bike racing where the downhills are timed, and the uphills are mandatory but not timed.[2][3][4] Riders are timed in stages that are primarily downhill, with neutral 'transfer' stages in between. The transfer stages usually must be completed within a time-limit, but are not part of the accumulated time. Enduros typically take place over one or two days, however, week-long competitions also exist such as the Trans-Savoie (France),[5] the Andes Pacifico (Chile),[6] and the Pisgah Stage Race (United States).[3] A typical one-day enduro consists of 3 to 5 timed stages which take place on technically demanding, generally descending terrain, and often with sections of singletrack. These stages are linked by predominantly ascending 'transfer' stages. Although a rider's performance on the physically demanding transfer stages does not affect his or her result, they often have a time-limit, or a latest allowed arrival-time for the start of the next stage. According to the Enduro World Series 2015 Rule Book, a minimum of four special stages is required per event, a minimum of three different courses must be used, and the results will be calculated by adding all stage times together for each rider. Enduro differs from cross-country (XC) racing which usually has more emphasis on cardiovascular fitness and less emphasis on technical ability, and pure downhill racing, which may contain little to no cross-country or climbing. Enduro's 'All Mountain' discipline therefore favours riders with a breadth of skill, on multi-discipline cycles. Lightweight XC bikes may lack sufficient suspension for fast downhill control, while full downhill bikes may not allow a rider to climb the uphill sections efficiently. In some countries, the term enduro is considered a contraction of 'endurance'.",
  },
  {
    id: 5,
    type: "Dirt",
    description:
      "If you're looking for a bike to take to the skatepark or dirt jumps, our dirt jump bikes are perfect. These bikes are built to handle big jumps and stunts, with a lightweight frame and strong components.",
    img: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwd7b25260/images/full/full_2023_/2023/full_2023_3210_stitched-720_P09_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F2F2F2",
    longDescription:
      "Dirt jumping is the practice of riding bikes over jumps made of dirt or soil and becoming airborne. Dirt Jumping evolved alongside BMX racing and is similar to BMX or mountain bike racing in that the rider jumps off of mounds of dirt, usually performing a midair trick in between.[1] It differs in that the jumps are usually much larger and designed to lift the rider higher into the air. Additionally, the goal is not to complete the course with the fastest time, but rather to perform the tricks with the style. Dirt jumping can be performed on BMX bikes or specialized mountain bikes known simply as 'dirt jumpers'. Dirt jumping uses a specific kind of bike. BMX, for instance, has a range of bikes built for this activity. One of its key differences from general purpose bikes is the fit. There is only one standard BMX dirt jumping bike frame, which is meant to fit all riders, young and old.[2] These bicycles tend to have a longer top tube than a street BMX bike and are often more robustly built to withstand the poundings from the jumps.[1] They will rarely have pegs fitted. Traditionally, DJ (dirt jump) bikes ran only a rear v-brake but disc brakes are becoming more common. DJ tires are treaded - the heaviest treads of all the BMX bikes[1] - as opposed to the slicks and semi-slicks used for park riding. The wheel size is mostly 26-inch. Some riders prefer large, padded seats for in-flight tricks while others do not find seat size an issue. The gear ratio is generally around 44:16, 36:13, 33:12, and 30:11, although using smaller gearings such as 25:9, known as 'micro gearing', has become popular. There is also the so-called hybrid BMX/Jump bike, which is a scaled-up BMX with 24-inch wheels. Strong alloy rims and lightweightframe. Suited to bigger jumps or more challenging competition courses. Other types of dirt jumping bikes include:",
  },
  {
    id: 6,
    type: "Trails",
    description:
      "Mountain bike trials, also known as observed trials, is a discipline of mountain biking in which the rider attempts to pass through an obstacle course without setting foot to ground. Derived from motorcycle trials, it originated in Catalonia, Spain.",
    img: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw3c542c2e/images/full/full_2023_/2023/full_2023_3211_stitched-cfr-trial_P02_P5.jpg?sw=874&sfrm=png&q=90&bgcolor=F2F2F2",
    longDescription:
      "Mountain bike trials, also known as observed trials, is a discipline of mountain biking in which the rider attempts to pass through an obstacle course without setting foot to ground. Derived from motorcycle trials, it originated in Catalonia, Spain as trialsín (from trial sin motor, 'motorcycle trials without an engine') and is said to have been invented by Pere Pi, the father of Ot Pi, a world champion motorcycle trials rider. Pi's father had wanted his son to learn motorcycle trials by practicing on an ordinary bicycle. Trials riding is an extreme test of bicycle handling skills, over many of obstacles, both natural and man-made. It now has a strong – though small – following worldwide, though it is still primarily a European sport. Skills taken from trials riding can be used practically on any bicycle for balance, for example controlled braking and track standing, or balancing on the bike without putting a foot down. Competition trial bikes are characterized by powerful brakes, wide handlebars, lightweight parts, single-speed low gearing, low tire pressures with a thick rear tire, distinctive frame geometry, and usually no seat. The general principle in a bike trials competition is to ride a number of pre-marked sections (usually two laps of ten sections or three laps of seven sections), the winner being the rider with the fewest points at the end of the competition. Currently there are two official types of competition rules, enforced by the UCI and BikeTrial International Union. The maximum number of points that can be obtained in each section is 5, the lowest (and best) score is 0 points or 'clean'. The most common way to gain a point is by putting a foot down within a section; for this reason points are sometimes known as 'dabs'. Certain rules enforce the number of points gained within a section, for example, putting both feet down or a hand will result in 5 points. Exceeding the time limit for the course will either result in 5 points (BIU rules) or an additional point for every 15 seconds over the limit (UCI rules).",
  },
];