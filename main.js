const operators = [

	/* 
	=== PLACE OPERATORS HERE IF YOU DON'T WANT THEM TO APPEAR IN RANDOMIZER ===

	=== STOP HERE ===
	*/

	//=======
	//6-Stars
	//=======	
	{name: "Ch'en", picture: "chara/chen.png", bgx: 50, bgy: 9, rarity: 6, size: 400},
	{name: "Siege", picture: "chara/siege.png", bgx: 48, bgy: 10, rarity: 6, size: 430},
	{name: "Shining", picture: "chara/shining.png", bgx: 49, bgy: 5, rarity: 6, size: 430},
	{name: "Nightingale", picture: "chara/nightingale.png", bgx: 49, bgy: 22, rarity: 6, size: 430},
	{name: "Ifrit", picture: "chara/ifrit.png", bgx: 47, bgy: -2, rarity: 6, size: 350},
	{name: "Eyjafjalla", picture: "chara/eyja.png", bgx: 50, bgy: 8, rarity: 6, size: 360},
	{name: "Exusiai", picture: "chara/exu.png", bgx: 46, bgy: 7, rarity: 6, size: 390},	
	{name: "Angelina", picture: "chara/angelina.png", bgx: 43, bgy: 5, rarity: 6, size: 380},
	{name: "SilverAsh", picture: "chara/sa.png", bgx: 51, bgy: 4.5, rarity: 6, size: 430},
	{name: "Hoshiguma", picture: "chara/hoshi.png", bgx: 51, bgy: 10, rarity: 6, size: 400},
	{name: "Saria", picture: "chara/saria.png", bgx: 47, bgy: 0, rarity: 6, size: 400},
	{name: "Skadi", picture: "chara/skadi.png", bgx: 50, bgy: 3, rarity: 6, size: 390},	
	{name: "Schwarz", picture: "chara/schwarz.png", bgx: 50, bgy: 4, rarity: 6, size: 400},
	{name: "Hellagur", picture: "chara/hellagur.png", bgx: 48, bgy: 5, rarity: 6, size: 430},	
	{name: "Magallan", picture: "chara/magallan.png", bgx: 47, bgy: 0, rarity: 6, size: 390},
	{name: "Mostima", picture: "chara/mostima.png", bgx: 54, bgy: 5, rarity: 6, size: 250},
	{name: "Blaze", picture: "chara/blaze.png", bgx: 38, bgy: 10, rarity: 6, size: 430},
	{name: "Aak", picture: "chara/aak.png", bgx: 53, bgy: 8, rarity: 6, size: 390},
	{name: "Nian", picture: "chara/nian.png", bgx: 46.5, bgy: 19, rarity: 6, size: 430},
	{name: "Ceobe", picture: "chara/ceobe.png", bgx: 53, bgy: 10, rarity: 6, size: 350},
	{name: "Bagpipe", picture: "chara/bagpipe.png", bgx: 52.5, bgy: 23, rarity: 6, size: 430},
	{name: "Phantom", picture: "chara/phantom.png", bgx: 48, bgy: 5, rarity: 6, size: 430},
	{name: "W", picture: "chara/w.png", bgx: 52, bgy: 8, rarity: 6, size: 430},
	{name: "Weedy", picture: "chara/weedy.png", bgx: 58, bgy: 20, rarity: 6, size: 390},
	{name: "Rosa", picture: "chara/rosa.png", bgx: 51, bgy: 18, rarity: 6, size: 430},
	{name: "Suzuran", picture: "chara/suzuran.png", bgx: 51.5, bgy: 14, rarity: 6, size: 350},
	{name: "Thorns", picture: "chara/thorns.png", bgx: 48, bgy: 5, rarity: 6, size: 430},
	{name: "Eunectes", picture: "chara/eunectes.png", bgx: 42, bgy: 10, rarity: 6, size: 430},
	{name: "Surtr", picture: "chara/surtr.png", bgx: 42, bgy: 22, rarity: 6, size: 500},
	{name: "Blemishine", picture: "chara/blemishine.png", bgx: 43, bgy: 18, rarity: 6, size: 460},
	{name: "Rosmontis", picture: "chara/rosmontis.png", bgx: 52, bgy: 34, rarity: 6, size: 530},
	{name: "Mudrock", picture: "chara/mudrock.png", bgx: 47, bgy: 15, rarity: 6, size: 430},
	{name: "Mountain", picture: "chara/mountain.png", bgx: 49, bgy: 3, rarity: 6, size: 430},
	{name: "Archetto", picture: "chara/archetto.png", bgx: 38, bgy: 5, rarity: 6, size: 300},
	{name: "Dusk", picture: "chara/dusk.png", bgx: 49, bgy: 8, rarity: 6, size: 380},
	{name: "Saga", picture: "chara/saga.png", bgx: 56, bgy: 17, rarity: 6, size: 400},
	{name: "Ash", picture: "chara/ash.png", bgx: 50, bgy: 9, rarity: 6, size: 440},
	{name: "Frost", picture: "chara/frost.png", bgx: 49, bgy: 11, rarity: 5, size: 440},
	{name: "Blitz", picture: "chara/blitz.png", bgx: 57, bgy: 5, rarity: 5, size: 440},
	{name: "Tachanka", picture: "chara/tachanka.png", bgx: 49, bgy: 6, rarity: 5, size: 400},


	//=======
	//5-Stars
	//=======
	{name: "Amiya", picture: "chara/amiya.png", bgx: 48, bgy: 34, rarity: 5, size: 450},
	{name: "Savage", picture: "chara/savage.png", bgx: 48, bgy: 18, rarity: 5, size: 430},
	{name: "Texas", picture: "chara/texas.png", bgx: 50, bgy: 5, rarity: 5, size: 400},
	{name: "Zima", picture: "chara/zima.png", bgx: 51, bgy: 8, rarity: 5, size: 400},
	{name: "Ptilopsis", picture: "chara/ptilopsis.png", bgx: 51, bgy: 6, rarity: 5, size: 400},
	{name: "Silence", picture: "chara/silence.png", bgx: 49, bgy: 8, rarity: 5, size: 400},
	{name: "Warfarin", picture: "chara/warfarin.png", bgx: 54, bgy: 2, rarity: 5, size: 400},
	{name: "Nightmare", picture: "chara/nightmare.png", bgx: 51, bgy: 8, rarity: 5, size: 400},
	{name: "Skyfire", picture: "chara/skyfire.png", bgx: 54.2, bgy: 1, rarity: 5, size: 400},
	{name: "Project Red", picture: "chara/red.png", bgx: 54, bgy: 8, rarity: 5, size: 400},
	{name: "Manticore", picture: "chara/manticore.png", bgx: 43, bgy: 18, rarity: 5, size: 400},
	{name: "Cliffheart", picture: "chara/cliffheart.png", bgx: 50, bgy: 3, rarity: 5, size: 400},
	{name: "FEater", picture: "chara/feater.png", bgx: 50, bgy: 8, rarity: 5, size: 400},
	{name: "Provence", picture: "chara/provence.png", bgx: 49, bgy: 8, rarity: 5, size: 400},
	{name: "Blue Poison", picture: "chara/bp.png", bgx: 48, bgy: 8, rarity: 5, size: 400},
	{name: "Firewatch", picture: "chara/firewatch.png", bgx: 49.8, bgy: 7.5, rarity: 5, size: 370},
	{name: "Meteorite", picture: "chara/meteorite.png", bgx: 51, bgy: 0, rarity: 5, size: 380},
	{name: "Platinum", picture: "chara/platinum.png", bgx: 51, bgy: 5, rarity: 5, size: 380},
	{name: "Pramanix", picture: "chara/pramanix.png", bgx: 57, bgy: 4, rarity: 5, size: 380},
	{name: "Istina", picture: "chara/istina.png", bgx: 51.5, bgy: 5, rarity: 5, size: 350},
	{name: "Mayer", picture: "chara/mayer.png", bgx: 52, bgy: 10, rarity: 5, size: 440},
	{name: "Sora", picture: "chara/sora.png", bgx: 49, bgy: 2, rarity: 5, size: 380},
	{name: "Franka", picture: "chara/franka.png", bgx: 45, bgy: 8, rarity: 5, size: 400},
	{name: "Specter", picture: "chara/specter.png", bgx: 57, bgy: 7.8, rarity: 5, size: 400},
	{name: "Indra", picture: "chara/indra.png", bgx: 51, bgy: 2, rarity: 5, size: 450},
	{name: "Lappland", picture: "chara/lappland.png", bgx: 49, bgy: 6, rarity: 5, size: 400},
	{name: "Nearl", picture: "chara/nearl.png", bgx: 46, bgy: 8, rarity: 5, size: 400},
	{name: "Liskarm", picture: "chara/liskarm.png", bgx: 51, bgy: 8, rarity: 5, size: 400},
	{name: "Vulcan", picture: "chara/vulcan.png", bgx: 48, bgy: 4, rarity: 5, size: 430},
	{name: "Croissant", picture: "chara/croissant.png", bgx: 50, bgy: 3, rarity: 5, size: 340},
	{name: "Grani", picture: "chara/grani.png", bgx: 54, bgy: 10, rarity: 5, size: 370},
	{name: "Swire", picture: "chara/swire.png", bgx: 49, bgy: 0, rarity: 5, size: 350},
	{name: "Glaucus", picture: "chara/glaucus.png", bgx: 52, bgy: 28, rarity: 5, size: 400},
	{name: "Ceylon", picture: "chara/ceylon.png", bgx: 45, bgy: 8, rarity: 5, size: 400},
	{name: "Astesia", picture: "chara/astesia.png", bgx: 50, bgy: 2, rarity: 5, size: 400},
	{name: "Flamebringer", picture: "chara/flamebringer.png", bgx: 44, bgy: 13, rarity: 5, size: 500},
	{name: "Executor", picture: "chara/executor.png", bgx: 48, bgy: 4, rarity: 5, size: 430},
	{name: "Breeze", picture: "chara/breeze.png", bgx: 55, bgy: 4, rarity: 5, size: 260},
	{name: "Waai Fu", picture: "chara/waaifu.png", bgx: 54, bgy: 2, rarity: 5, size: 180},
	{name: "Bison", picture: "chara/bison.png", bgx: 35, bgy: 4, rarity: 5, size: 200},
	{name: "Reed", picture: "chara/reed.png", bgx: 40, bgy: 25, rarity: 5, size: 500},
	{name: "Broca", picture: "chara/broca.png", bgx: 50, bgy: 4, rarity: 5, size: 400},
	{name: "GreyThroat", picture: "chara/greythroat.png", bgx: 50, bgy: 4, rarity: 5, size: 400},
	{name: "Snowsant", picture: "chara/snowsant.png", bgx: 50, bgy: -2, rarity: 5, size: 350},
	{name: "Hung", picture: "chara/hung.png", bgx: 50, bgy: 5, rarity: 5, size: 400},
	{name: "Leizi", picture: "chara/leizi.png", bgx: 47, bgy: 17, rarity: 5, size: 450},
	{name: "Bibeak", picture: "chara/bibeak.png", bgx: 46, bgy: -2, rarity: 5, size: 380},
	{name: "Sesa", picture: "chara/sesa.png", bgx: 43, bgy: 15, rarity: 5, size: 480},
	{name: "Shamare", picture: "chara/shamare.png", bgx: 48, bgy: 11, rarity: 5, size: 380},
	{name: "Sideroca", picture: "chara/sideroca.png", bgx: 50, bgy: 15, rarity: 5, size: 400},
	{name: "Elysium", picture: "chara/ely.png", bgx: 42, bgy: 15, rarity: 5, size: 430},
	{name: "Asbestos", picture: "chara/asbestos.png", bgx: 45, bgy: 8, rarity: 5, size: 360},
	{name: "Tsukinogi", picture: "chara/tsukinogi.png", bgx: 46, bgy: 16, rarity: 5, size: 400},
	{name: "Absinthe", picture: "chara/absinthe.png", bgx: 41, bgy: 8, rarity: 5, size: 400},
	{name: "Leonhardt", picture: "chara/leon.png", bgx: 26, bgy: 13, rarity: 5, size: 400},
	{name: "Ayerscarpe", picture: "chara/ayer.png", bgx: 48, bgy: 8, rarity: 5, size: 430},
	{name: "Folinic", picture: "chara/folinic.png", bgx: 49, bgy: 6.5, rarity: 5, size: 400},
	{name: "Beeswax", picture: "chara/beeswax.png", bgx: 49, bgy: 23, rarity: 5, size: 480},
	{name: "Chiave", picture: "chara/chiave.png", bgx: 48, bgy: 7, rarity: 5, size: 460},
	{name: "Scene", picture: "chara/scene.png", bgx: 46, bgy: 3, rarity: 5, size: 360},
	{name: "Andreana", picture: "chara/andreana.png", bgx: 54, bgy: 8, rarity: 5, size: 400},
	{name: "Tomimi", picture: "chara/tomimi.png", bgx: 46, bgy: 25, rarity: 5, size: 400},
	{name: "Flint", picture: "chara/flint.png", bgx: 49, bgy: 8, rarity: 5, size: 400},
	{name: "Mint", picture: "chara/mint.png", bgx: 51, bgy: 15, rarity: 5, size: 400},
	{name: "April", picture: "chara/april.png", bgx: 48, bgy: 15, rarity: 5, size: 345},
	{name: "Aosta", picture: "chara/aosta.png", bgx: 48, bgy: 15, rarity: 5, size: 480},
	{name: "Whislash", picture: "chara/whislash.png", bgx: 50, bgy: 8, rarity: 5, size: 400},
	{name: "Whisperain", picture: "chara/whisperain.png", bgx: 49, bgy: 8, rarity: 5, size: 450},
	{name: "Kafka", picture: "chara/kafka.png", bgx: 51, bgy: 7, rarity: 5, size: 380},
	{name: "Robin", picture: "chara/robin.png", bgx: 48, bgy: 8, rarity: 5, size: 380},
	{name: "Iris", picture: "chara/iris.png", bgx: 54, bgy: 26, rarity: 5, size: 440},
	{name: "Tuye", picture: "chara/tuye.png", bgx: 47.5, bgy: 17.5, rarity: 5, size: 380},
	{name: "Lava", picture: "chara/purgatory.png", bgx: 51, bgy: 10, rarity: 5, size: 380},
	{name: "Mr. Nothing", picture: "chara/nothing.png", bgx: 49, bgy: 4, rarity: 5, size: 440},


	//=======
	//4-Stars
	//=======
	{name: "Courier", picture: "chara/courier.png", bgx: 52, bgy: 3, rarity: 4, size: 430},	
	{name: "Scavenger", picture: "chara/scavenger.png", bgx: 59, bgy: 3, rarity: 4, size: 430},	
	{name: "Vigna", picture: "chara/vigna.png", bgx: 37, bgy: 9, rarity: 4, size: 350},	
	{name: "Myrrh", picture: "chara/myrrh.png", bgx: 50.5, bgy: 7, rarity: 4, size: 340},	
	{name: "Gavial", picture: "chara/gavial.png", bgx: 55, bgy: 6, rarity: 4, size: 350},	
	{name: "Perfumer", picture: "chara/perfumer.png", bgx: 59, bgy: 8, rarity: 4, size: 350},	
	{name: "Haze", picture: "chara/haze.png", bgx: 52, bgy: 6, rarity: 4, size: 350},	
	{name: "Gitano", picture: "chara/gitano.png", bgx: 50, bgy: 8, rarity: 4, size: 440},	
	{name: "Gravel", picture: "chara/gravel.png", bgx: 46.5, bgy: 3, rarity: 4, size: 380},
	{name: "Rope", picture: "chara/rope.png", bgx: 50, bgy: 11, rarity: 4, size: 400},	
	{name: "Shaw", picture: "chara/shaw.png", bgx: 48, bgy: 4, rarity: 4, size: 250},	
	{name: "Shirayuki", picture: "chara/shirayuki.png", bgx: 42, bgy: 8, rarity: 4, size: 370},	
	{name: "Meteor", picture: "chara/meteor.png", bgx: 53, bgy: 10, rarity: 4, size: 400},	
	{name: "Jessica", picture: "chara/jessica.png", bgx: 50, bgy: 3, rarity: 4, size: 360},	
	{name: "Deepcolor", picture: "chara/deepcolor.png", bgx: 48, bgy: 7.5, rarity: 4, size: 350},	
	{name: "Earthspirit", picture: "chara/earthspirit.png", bgx: 50, bgy: 13, rarity: 4, size: 420},	
	{name: "Dobermann", picture: "chara/dobermann.png", bgx: 51, bgy: 12, rarity: 4, size: 400},	
	{name: "Estelle", picture: "chara/estelle.png", bgx: 40, bgy: 16, rarity: 4, size: 340},	
	{name: "Beehunter", picture: "chara/beehunter.png", bgx: 48, bgy: 0, rarity: 4, size: 360},	
	{name: "Mousse", picture: "chara/mousse.png", bgx: 47.5, bgy: 7, rarity: 4, size: 350},	
	{name: "Frostleaf", picture: "chara/frostleaf.png", bgx: 43, bgy: 30, rarity: 4, size: 400},	
	{name: "Matoimaru", picture: "chara/matoimaru.png", bgx: 56, bgy: 11, rarity: 4, size: 460},	
	{name: "Cuora", picture: "chara/cuora.png", bgx: 64, bgy: 3, rarity: 4, size: 350},	
	{name: "Gummy", picture: "chara/gummy.png", bgx: 53, bgy: 2, rarity: 4, size: 330},	
	{name: "Matterhorn", picture: "chara/matterhorn.png", bgx: 49, bgy: 8, rarity: 4, size: 430},
	{name: "Grey", picture: "chara/grey.png", bgx: 44, bgy: 3, rarity: 4, size: 330},	
	{name: "Sussuro", picture: "chara/sussurro.png", bgx: 47, bgy: 5, rarity: 4, size: 330},	
	{name: "Myrtle", picture: "chara/myrtle.png", bgx: 51, bgy: 28, rarity: 4, size: 400},	
	{name: "Durnar", picture: "chara/durnar.png", bgx: 47, bgy: 6, rarity: 4, size: 360},	
	{name: "Vermeil", picture: "chara/vermeil.png", bgx: 49, bgy: 7, rarity: 4, size: 320},	
	{name: "Ethan", picture: "chara/ethan.png", bgx: 23, bgy: -3, rarity: 4, size: 190},	
	{name: "May", picture: "chara/may.png", bgx: 38, bgy: 8.5, rarity: 4, size: 250},	
	{name: "Ambriel", picture: "chara/ambriel.png", bgx: 51, bgy: 7, rarity: 4, size: 390},	
	{name: "Purestream", picture: "chara/purestream.png", bgx: 48, bgy: 13, rarity: 4, size: 380},	
	{name: "Utage", picture: "chara/utage.png", bgx: 51.5, bgy: 2, rarity: 4, size: 300},	
	{name: "Conviction", picture: "chara/conviction.png", bgx: 46.5, bgy: 12.5, rarity: 4, size: 330},	
	{name: "Cutter", picture: "chara/cutter.png", bgx: 41, bgy: 10, rarity: 4, size: 370},	
	{name: "Podenco", picture: "chara/podenco.png", bgx: 51, bgy: 3, rarity: 4, size: 340},	
	{name: "Click", picture: "chara/click.png", bgx: 61, bgy: 11.5, rarity: 4, size: 340},	
	{name: "Jaye", picture: "chara/jaye.png", bgx: 49, bgy: 19, rarity: 4, size: 430},	
	{name: "Aciddrop", picture: "chara/acid.png", bgx: 48, bgy: 6, rarity: 4, size: 340},	
	{name: "Arene", picture: "chara/arene.png", bgx: 51, bgy: 15, rarity: 4, size: 450},	
	{name: "Bubble", picture: "chara/bubble.png", bgx: 35, bgy: 25, rarity: 4, size: 360},	
	{name: "Jackie", picture: "chara/jackie.png", bgx: 48, bgy: 9, rarity: 4, size: 390},
	{name: "Pinecone", picture: "chara/pinecone.png", bgx: 51, bgy: 9.5, rarity: 4, size: 350},
	{name: "Beanstalk", picture: "chara/beanstalk.png", bgx: 43, bgy: 4, rarity: 4, size: 350},


	//=======
	//3-Stars
	//=======
	{name: "Fang", picture: "chara/fang.png", bgx: 47, bgy: 11, rarity: 3, size: 370},	
	{name: "Vanilla", picture: "chara/vanilla.png", bgx: 75, bgy: -1, rarity: 3, size: 370},	
	{name: "Plume", picture: "chara/plume.png", bgx: 49.5, bgy: 22, rarity: 3, size: 400},	
	{name: "Hibiscus", picture: "chara/hibiscus.png", bgx: 51, bgy: 6, rarity: 3, size: 330},	
	{name: "Ansel", picture: "chara/ansel.png", bgx: 51, bgy: 11, rarity: 3, size: 370},	
	{name: "Lava", picture: "chara/lava.png", bgx: 48, bgy: 6, rarity: 3, size: 340},	
	{name: "Steward", picture: "chara/steward.png", bgx: 47.5, bgy: 10, rarity: 3, size: 370},	
	{name: "Kroos", picture: "chara/kroos.png", bgx: 45, bgy: 10, rarity: 3, size: 340},	
	{name: "Adnachiel", picture: "chara/adnachiel.png", bgx: 50, bgy: 11.5, rarity: 3, size: 400},	
	{name: "Orchid", picture: "chara/orchid.png", bgx: 44, bgy: 9, rarity: 3, size: 405},	
	{name: "Melantha", picture: "chara/melantha.png", bgx: 42, bgy: 6, rarity: 3, size: 360},	
	{name: "Beagle", picture: "chara/beagle.png", bgx: 47.5, bgy: 6, rarity: 3, size: 300},	
	{name: "Cardingan", picture: "chara/cardingan.png", bgx: 49, bgy: 6, rarity: 3, size: 360},	
	{name: "Catapult", picture: "chara/catapult.png", bgx: 49, bgy: 9, rarity: 3, size: 390},	
	{name: "Midnight", picture: "chara/midnight.png", bgx: 49.5, bgy: 4, rarity: 3, size: 400},	
	{name: "Popukar", picture: "chara/popukar.png", bgx: 72, bgy: -2, rarity: 3, size: 280},	
	{name: "Spot", picture: "chara/spot.png", bgx: 47, bgy: 3, rarity: 3, size: 270},


	//=======
	//2-Stars
	//=======
	{name: "Yato", picture: "chara/yato.png", bgx: 52, bgy: 5, rarity: 2, size: 340},	
	{name: "Noir Corne", picture: "chara/noir.png", bgx: 50, bgy: 5, rarity: 2, size: 400},	
	{name: "Ranger", picture: "chara/ranger.png", bgx: 45, bgy: 2, rarity: 2, size: 370},	
	{name: "12F", picture: "chara/12f.png", bgx: 52, bgy: 5, rarity: 2, size: 400},	
	{name: "Durin", picture: "chara/durin.png", bgx: 47, bgy: 4, rarity: 2, size: 320},


	//======
	//1-Star
	//======
	{name: "Lancet-2", picture: "chara/lancet2.png", bgx: 52, bgy: 200, rarity: 1, size: 150},	
	{name: "Castle-3", picture: "chara/castle3.png", bgx: 55, bgy: 0, rarity: 1, size: 170},	
	{name: "Thermal-EX", picture: "chara/thermalex.png", bgx: 52, bgy: 40, rarity: 1, size: 200},		

]


//------------
//---STAGES---
//------------


const stages = [
	
	/*
	=== PLACE STAGES HERE IF YOU DON'T WANT THEM TO APPEAR IN RANDOMIZER ===
	
	=== STOP HERE ===
	*/
	
	//==========
	//MAIN STORY
	//==========

	//Prologue
	{chapter: "Prologue", stage: "0-1", cm:"yes"},
	{chapter: "Prologue", stage: "0-2", cm:"yes"},
	{chapter: "Prologue", stage: "0-3", cm:"yes"},
	{chapter: "Prologue", stage: "0-4", cm:"yes"},
	{chapter: "Prologue", stage: "0-5", cm:"yes"},
	{chapter: "Prologue", stage: "0-6", cm:"yes"},
	{chapter: "Prologue", stage: "0-7", cm:"yes"},
	{chapter: "Prologue", stage: "0-8", cm:"yes"},
	{chapter: "Prologue", stage: "0-9", cm:"yes"},
	{chapter: "Prologue", stage: "0-10", cm:"yes"},
	{chapter: "Prologue", stage: "0-11", cm:"yes"},
	
	//Episode 1
	{chapter: "Episode 1", stage: "1-1", cm:"yes"},
	{chapter: "Episode 1", stage: "1-3", cm:"yes"},
	{chapter: "Episode 1", stage: "1-4", cm:"yes"},
	{chapter: "Episode 1", stage: "1-5", cm:"yes"},
	{chapter: "Episode 1", stage: "1-6", cm:"yes"},
	{chapter: "Episode 1", stage: "1-7", cm:"yes"},
	{chapter: "Episode 1", stage: "1-8", cm:"yes"},
	{chapter: "Episode 1", stage: "1-9", cm:"yes"},
	{chapter: "Episode 1", stage: "1-10", cm:"yes"},
	{chapter: "Episode 1", stage: "1-12", cm:"yes"},

	//Episode 2
	{chapter: "Episode 2", stage: "2-1", cm:"yes"},
	{chapter: "Episode 2", stage: "S2-1", cm:"no"},
	{chapter: "Episode 2", stage: "2-2", cm:"yes"},
	{chapter: "Episode 2", stage: "S2-2", cm:"no"},
	{chapter: "Episode 2", stage: "S2-3", cm:"no"},
	{chapter: "Episode 2", stage: "S2-4", cm:"no"},
	{chapter: "Episode 2", stage: "2-3", cm:"yes"},
	{chapter: "Episode 2", stage: "2-4", cm:"yes"},
	{chapter: "Episode 2", stage: "S2-5", cm:"no"},
	{chapter: "Episode 2", stage: "S2-6", cm:"no"},
	{chapter: "Episode 2", stage: "S2-7", cm:"no"},
	{chapter: "Episode 2", stage: "2-5", cm:"yes"},
	{chapter: "Episode 2", stage: "2-6", cm:"yes"},
	{chapter: "Episode 2", stage: "2-7", cm:"yes"},
	{chapter: "Episode 2", stage: "S2-8", cm:"no"},
	{chapter: "Episode 2", stage: "S2-9", cm:"no"},
	{chapter: "Episode 2", stage: "2-8", cm:"yes"},
	{chapter: "Episode 2", stage: "S2-10", cm:"no"},
	{chapter: "Episode 2", stage: "S2-11", cm:"no"},
	{chapter: "Episode 2", stage: "S2-12", cm:"no"},
	{chapter: "Episode 2", stage: "2-10", cm:"yes"},

	//Episode 3
	{chapter: "Episode 3", stage: "3-1", cm:"yes"},
	{chapter: "Episode 3", stage: "3-2", cm:"yes"},
	{chapter: "Episode 3", stage: "3-3", cm:"yes"},
	{chapter: "Episode 3", stage: "S3-1", cm:"no"},
	{chapter: "Episode 3", stage: "S3-2", cm:"no"},
	{chapter: "Episode 3", stage: "3-4", cm:"yes"},
	{chapter: "Episode 3", stage: "3-5", cm:"yes"},
	{chapter: "Episode 3", stage: "3-6", cm:"yes"},
	{chapter: "Episode 3", stage: "3-7", cm:"yes"},
	{chapter: "Episode 3", stage: "3-8", cm:"yes"},
	{chapter: "Episode 3", stage: "S3-3", cm:"no"},
	{chapter: "Episode 3", stage: "S3-4", cm:"no"},
	{chapter: "Episode 3", stage: "S3-5", cm:"no"},
	{chapter: "Episode 3", stage: "S3-6", cm:"no"},
	{chapter: "Episode 3", stage: "S3-7", cm:"no"},

	//Episode 4
	{chapter: "Episode 4", stage: "4-1", cm:"yes"},
	{chapter: "Episode 4", stage: "4-2", cm:"yes"},
	{chapter: "Episode 4", stage: "4-3", cm:"yes"},
	{chapter: "Episode 4", stage: "S4-1", cm:"no"},
	{chapter: "Episode 4", stage: "S4-2", cm:"no"},
	{chapter: "Episode 4", stage: "S4-3", cm:"no"},
	{chapter: "Episode 4", stage: "4-4", cm:"yes"},
	{chapter: "Episode 4", stage: "4-5", cm:"yes"},
	{chapter: "Episode 4", stage: "4-6", cm:"yes"},
	{chapter: "Episode 4", stage: "S4-4", cm:"no"},
	{chapter: "Episode 4", stage: "S4-5", cm:"no"},
	{chapter: "Episode 4", stage: "S4-6", cm:"no"},
	{chapter: "Episode 4", stage: "4-7", cm:"yes"},
	{chapter: "Episode 4", stage: "4-8", cm:"yes"},
	{chapter: "Episode 4", stage: "4-9", cm:"yes"},
	{chapter: "Episode 4", stage: "S4-7", cm:"no"},
	{chapter: "Episode 4", stage: "S4-8", cm:"no"},
	{chapter: "Episode 4", stage: "S4-9", cm:"no"},
	{chapter: "Episode 4", stage: "S4-10", cm:"no"},
	{chapter: "Episode 4", stage: "4-10", cm:"yes"},

	//Episode 5
	{chapter: "Episode 5", stage: "5-1", cm:"yes"},
	{chapter: "Episode 5", stage: "5-2", cm:"yes"},
	{chapter: "Episode 5", stage: "S5-1", cm:"no"},
	{chapter: "Episode 5", stage: "S5-2", cm:"no"},
	{chapter: "Episode 5", stage: "5-3", cm:"yes"},
	{chapter: "Episode 5", stage: "5-4", cm:"yes"},
	{chapter: "Episode 5", stage: "5-5", cm:"yes"},
	{chapter: "Episode 5", stage: "5-6", cm:"yes"},
	{chapter: "Episode 5", stage: "S5-3", cm:"no"},
	{chapter: "Episode 5", stage: "S5-4", cm:"no"},
	{chapter: "Episode 5", stage: "5-7", cm:"yes"},
	{chapter: "Episode 5", stage: "5-8", cm:"yes"},
	{chapter: "Episode 5", stage: "5-9", cm:"yes"},
	{chapter: "Episode 5", stage: "S5-5", cm:"no"},
	{chapter: "Episode 5", stage: "S5-6", cm:"no"},
	{chapter: "Episode 5", stage: "S5-7", cm:"no"},
	{chapter: "Episode 5", stage: "S5-8", cm:"no"},
	{chapter: "Episode 5", stage: "S5-9", cm:"no"},
	{chapter: "Episode 5", stage: "5-10", cm:"yes"},
	{chapter: "Episode 5", stage: "H5-1", cm:"no"},
	{chapter: "Episode 5", stage: "H5-2", cm:"no"},
	{chapter: "Episode 5", stage: "H5-3", cm:"no"},
	{chapter: "Episode 5", stage: "H5-4", cm:"no"},

	//Episode 6
	{chapter: "Episode 6", stage: "6-1", cm:"yes"},
	{chapter: "Episode 6", stage: "6-2", cm:"yes"},
	{chapter: "Episode 6", stage: "6-3", cm:"yes"},
	{chapter: "Episode 6", stage: "6-4", cm:"yes"},
	{chapter: "Episode 6", stage: "6-5", cm:"yes"},
	{chapter: "Episode 6", stage: "6-8", cm:"yes"},
	{chapter: "Episode 6", stage: "6-9", cm:"yes"},
	{chapter: "Episode 6", stage: "6-10", cm:"yes"},
	{chapter: "Episode 6", stage: "S6-1", cm:"no"},
	{chapter: "Episode 6", stage: "S6-2", cm:"no"},
	{chapter: "Episode 6", stage: "6-11", cm:"yes"},
	{chapter: "Episode 6", stage: "6-12", cm:"yes"},
	{chapter: "Episode 6", stage: "6-14", cm:"yes"},
	{chapter: "Episode 6", stage: "6-15", cm:"yes"},
	{chapter: "Episode 6", stage: "S6-3", cm:"no"},
	{chapter: "Episode 6", stage: "S6-4", cm:"no"},
	{chapter: "Episode 6", stage: "6-16", cm:"yes"},
	{chapter: "Episode 6", stage: "H6-1", cm:"no"},
	{chapter: "Episode 6", stage: "H6-2", cm:"no"},
	{chapter: "Episode 6", stage: "H6-3", cm:"no"},
	{chapter: "Episode 6", stage: "H6-4", cm:"no"},

	//Episode 7
	{chapter: "Episode 7", stage: "7-2", cm:"yes"},
	{chapter: "Episode 7", stage: "7-3", cm:"yes"},
	{chapter: "Episode 7", stage: "7-4", cm:"yes"},
	{chapter: "Episode 7", stage: "7-5", cm:"yes"},
	{chapter: "Episode 7", stage: "7-6", cm:"yes"},
	{chapter: "Episode 7", stage: "7-8", cm:"yes"},
	{chapter: "Episode 7", stage: "7-9", cm:"yes"},
	{chapter: "Episode 7", stage: "7-10", cm:"yes"},
	{chapter: "Episode 7", stage: "7-11", cm:"yes"},
	{chapter: "Episode 7", stage: "7-12", cm:"yes"},
	{chapter: "Episode 7", stage: "7-13", cm:"yes"},
	{chapter: "Episode 7", stage: "7-14", cm:"yes"},
	{chapter: "Episode 7", stage: "7-15", cm:"yes"},
	{chapter: "Episode 7", stage: "7-16", cm:"yes"},
	{chapter: "Episode 7", stage: "S7-1", cm:"no"},
	{chapter: "Episode 7", stage: "S7-2", cm:"no"},
	{chapter: "Episode 7", stage: "7-17", cm:"yes"},
	{chapter: "Episode 7", stage: "7-18", cm:"yes"},
	{chapter: "Episode 7", stage: "H7-1", cm:"no"},
	{chapter: "Episode 7", stage: "H7-2", cm:"no"},
	{chapter: "Episode 7", stage: "H7-3", cm:"no"},
	{chapter: "Episode 7", stage: "H7-4", cm:"no"},

	// Episode 8
	{chapter: "Episode 8", stage: "R8-1", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-2", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-3", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-4", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-5", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-6", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-7", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-8", cm:"yes"},
	{chapter: "Episode 8", stage: "M8-6", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-9", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-10", cm:"yes"},
	{chapter: "Episode 8", stage: "M8-7", cm:"yes"},
	{chapter: "Episode 8", stage: "R8-11", cm:"yes"},
	{chapter: "Episode 8", stage: "M8-8", cm:"yes"},
	{chapter: "Episode 8", stage: "JT8-2", cm:"yes"},
	{chapter: "Episode 8", stage: "JT8-3", cm:"yes"},
	{chapter: "Episode 8", stage: "H8-1", cm:"no"},
	{chapter: "Episode 8", stage: "H8-2", cm:"no"},
	{chapter: "Episode 8", stage: "H8-3", cm:"no"},
	{chapter: "Episode 8", stage: "H8-4", cm:"no"},

	//==========
	//Supplies
	//==========
	
	//==========
	//Events
	//==========
	
]


function createCard(){
	let card = document.createElement("div")
	let nameplate = document.createElement("div")
	let nameplateshadow = document.createElement("div")
	let name = document.createElement("div")
	let solorandom = document.createElement("div")
	card.classList.toggle("card", true)
	nameplate.classList.toggle("nameplate", true)
	solorandom.classList.toggle("solorandom", true)
	nameplateshadow.classList.toggle("nameplateshadow", true)
	name.classList.toggle("name", true)
	nameplate.appendChild(name)
	card.appendChild(nameplateshadow)
	nameplateshadow.appendChild(nameplate)
	card.appendChild(solorandom)
	solorandom.classList.toggle("hidden", true)
	return card
}

function createLogo(){
	let card = document.createElement("div")
	card.addEventListener("click", prts)
	card.classList.toggle("logo", true)
	return card
}

function createButton(){
	let card = document.createElement("div")
	card.classList.toggle("button", true)
	card.addEventListener("click", handleButtonClick)
	return card
}

let cardHolder = document.getElementById("cardHolder")

const cards = []
const random = []
const chosen = []

for (let i = 0; i < operators.length; i++){
	random.push({random:Math.random(), i}) 
}

for (let i = 0; i < 14; i++){
	let card = createCard()
	if(i == 6) {
		card = createLogo()
	} else if(i == 13) {
		card = createButton()
	} else { 
		// let index = i<6?(i%2==0?i/2:(i+1)/2+5):(i%2==0?i/2-4+9:(i+1)/2-1)
		let index = i<6?i:i-1
		card.querySelector(".solorandom").addEventListener('click', function(){generateOperator(index)})
		cards[index] = card
	}
	cardHolder.appendChild(card)
}

function generateOperators(){

	while (chosen.length){
		random.push(chosen.pop())
	}

	randomizeOperators()

	for (let i = 0; i < cards.length; i++) {
		randomizeCard(i)
	}

	if(sortNameState != 0){
		sortCardsByName()
	}
	else if(sortRankState != 0){
		sortCardsByRank()
	}
}

function generateOperator(i){
	let temp = chosen[i]
	randomizeOperators()
	randomizeCard(i)
	random.push(temp)
}

function randomizeOperators(){
	for (let i = 0; i < random.length; i++){
		random[i].random = Math.random()
	}

	random.sort(function(a, b){return a.random-b.random})
}


function randomizeCard(i){
	let entry = random.pop()
	chosen[i] = entry
	const operator = operators[entry.i]
	cards[i].style = `background: url(${operator.picture}) no-repeat; background-position: ${operator.bgx}% ${operator.bgy}%; background-size: ${operator.size}%;`
	cards[i].querySelector(".nameplate .name").innerText = operator.name
	for (let o = 1; o <= 6; o++){
		cards[i].querySelector(".nameplateshadow").classList.toggle(`rarity-${o}`, false)
	}
	cards[i].querySelector(".nameplateshadow").classList.toggle(`rarity-${operator.rarity}`, true)
	cards[i].querySelector(".solorandom").classList.toggle("hidden", false)
}

let shuffleTimer
let shuffleInterval


function handleButtonClick(){
	clearTimeout(shuffleTimer)
	clearInterval(shuffleInterval)
	shuffleTimer = setTimeout(function(){
		clearInterval(shuffleInterval)
		generateOperators()
	}, 1500)
	shuffleInterval = setInterval(generateOperators, 100)
}

let sortName = document.getElementById("sortName")
let sortRank = document.getElementById("sortRank")
let sortNameState = 1;
sortName.classList.toggle("ascending", true)
let sortRankState = 0;

sortName.addEventListener("click", function(){
	if(sortNameState == 0){
		sortRankState = 0
		sortRank.classList.toggle("ascending", false)
		sortRank.classList.toggle("descending", false)
		sortNameState = 1
		sortName.classList.toggle("ascending", true)
		sortName.classList.toggle("descending", false)
	}
	else if(sortNameState == 1){
		sortNameState = -1
		sortName.classList.toggle("descending", true)
		sortName.classList.toggle("ascending", false)
	}
	else{
		sortNameState = 1
		sortName.classList.toggle("ascending", true)
		sortName.classList.toggle("descending", false)
	}
	sortCardsByName()
})

sortRank.addEventListener("click", function(){
	if(sortRankState == 0){
		sortNameState = 0
		sortName.classList.toggle("ascending", false)
		sortName.classList.toggle("descending", false)
		sortRankState = -1
		sortRank.classList.toggle("descending", true)
		sortRank.classList.toggle("asscending", false)
	}
	else if(sortRankState == -1){
		sortRankState = 1
		sortRank.classList.toggle("descending", false)
		sortRank.classList.toggle("ascending", true)

	}
	else{
		sortRankState = -1
		sortRank.classList.toggle("ascending", false)
		sortRank.classList.toggle("descending", true)
	}
	sortCardsByRank()
})

function sortCardsByName(){
	const chosenOperators = []
	for(let i=0;i<chosen.length;i++){
		const operator = operators[chosen[i].i]
		chosenOperators.push(operator)
	}
	if(sortNameState == 1){
		chosenOperators.sort(function(a, b){
			return a.name.localeCompare(b.name)
		})
	}
	else if(sortNameState == -1){
		chosenOperators.sort(function(a, b){
			return b.name.localeCompare(a.name)
		})
	}
	for(let i=0;i<chosenOperators.length;i++){
		const operator = chosenOperators[i]
		let index = i%2 == 0?i/2:(i+1)/2+5
		// 0 1 2 3 4 5 6 7 8 9  10 11
		// 0 6 1 7 2 8 3 9 4 10  5 11
		cards[index].style = `background: url(${operator.picture}) no-repeat; background-position: ${operator.bgx}% ${operator.bgy}%; background-size: ${operator.size}%;`
		cards[index].querySelector(".nameplate .name").innerText = operator.name
		for (let o = 1; o <= 6; o++){
			cards[index].querySelector(".nameplateshadow").classList.toggle(`rarity-${o}`, false)
		}
		cards[index].querySelector(".nameplateshadow").classList.toggle(`rarity-${operator.rarity}`, true)
		cards[index].querySelector(".solorandom").classList.toggle("hidden", false)
	}
}

function sortCardsByRank(){
	const chosenOperators = []
	for(let i=0;i<chosen.length;i++){
		const operator = operators[chosen[i].i]
		chosenOperators.push(operator)
	}
	if(sortRankState == 1){
		chosenOperators.sort(function(a, b){
			return a.rarity - b.rarity
		})
	}
	else if(sortRankState == -1){
		chosenOperators.sort(function(a, b){
			return b.rarity - a.rarity
		})
	}
	for(let i=0;i<chosenOperators.length;i++){
		const operator = chosenOperators[i]
		let index = i%2 == 0?i/2:(i+1)/2+5
		cards[index].style = `background: url(${operator.picture}) no-repeat; background-position: ${operator.bgx}% ${operator.bgy}%; background-size: ${operator.size}%;`
		cards[index].querySelector(".nameplate .name").innerText = operator.name
		for (let o = 1; o <= 6; o++){
			cards[index].querySelector(".nameplateshadow").classList.toggle(`rarity-${o}`, false)
		}
		cards[index].querySelector(".nameplateshadow").classList.toggle(`rarity-${operator.rarity}`, true)
		cards[index].querySelector(".solorandom").classList.toggle("hidden", false)
	}
}

let modal = document.getElementById("modal")
let closeBtn = document.getElementById("closeBtn")
let map = document.getElementById("map")
let challengeModeCheck = document.getElementById("challengeMode")
let mapButton = document.getElementById("mapBtn")

function prts(){
	modal.style.display = "block"
	closeBtn.onclick = function(){
		modal.style.display = "none"
	}
	window.onclick = function(event) {
  		if (event.target == modal) {
    	modal.style.display = "none"
  		}
	}
}

function randomMap(){
	let i = Math.floor(Math.random() * stages.length)
	modalText.innerText = stages[i].chapter + " > " + stages[i].stage
	map.src = `stages/${stages[i].chapter}/${stages[i].stage}.png`
	if(stages[i].cm == "yes"){
		if(Math.floor(Math.random() * 6) == 0)
		{
			challengeModeCheck.style.display = "block"
		}
		else{
			challengeModeCheck.style.display = "none"
		}
	}
	else{
		challengeModeCheck.style.display = "none"
	}
}

mapButton.onclick = function(){
	randomMap()
}

console.log("Find me on YouTube: XomeZest")
console.log("Any suggestions or bugs? Sent me a message through Discord: XomeZest#8952")
