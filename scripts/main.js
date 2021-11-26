const operators = [
	
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
	{name: "Passenger", picture: "chara/passenger.png", bgx: 65.5, bgy: 6, rarity: 6, size: 500},
	{name: "Gladiia", picture: "chara/gladiia.png", bgx: 49.5, bgy: 25, rarity: 6, size: 550},
	{name: "Skadi", picture: "chara/corrupting.png", bgx: 50, bgy: 12, rarity: 6, size: 400},
	{name: "Kal'tsit", picture: "chara/kaltsit.png", bgx: 48, bgy: 10, rarity: 6, size: 420},

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
	{name: "Frost", picture: "chara/frost.png", bgx: 49, bgy: 11, rarity: 5, size: 440},
	{name: "Blitz", picture: "chara/blitz.png", bgx: 57, bgy: 5, rarity: 5, size: 440},
	{name: "Tachanka", picture: "chara/tachanka.png", bgx: 49, bgy: 6, rarity: 5, size: 400},
	{name: "Toddifons", picture: "chara/toddifons.png", bgx: 59, bgy: 19, rarity: 5, size: 410},
	{name: "Heavyrain", picture: "chara/heavyrain.png", bgx: 47, bgy: 12, rarity: 5, size: 440},
	{name: "Akafuyu", picture: "chara/akafuyu.png", bgx: 43, bgy: 12, rarity: 5, size: 420},

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
	{name: "THRM-EX", picture: "chara/thermalex.png", bgx: 52, bgy: 40, rarity: 1, size: 200},		

	/* 
	Unrealeased Operators
	
	-6 Stars-
	{name: "Carnelian", picture: "chara/carnelian.png", bgx: 49, bgy: 8, rarity: 6, size: 460},
	{name: "Pallas", picture: "chara/pallas.png", bgx: 44, bgy: 20, rarity: 6, size: 420},
	{name: "Ch'en", picture: "chara/chalter.png", bgx: 58, bgy: 16, rarity: 6, size: 460},
	{name: "Mizuki", picture: "chara/mizuki.png", bgx: 50, bgy: 17, rarity: 6, size: 400},
	{name: "Saileach", picture: "chara/saileach.png", bgx: 51, bgy: 30.5, rarity: 6, size: 600},
	{name: "Fartooth", picture: "chara/fartooth.png", bgx: 51.5, bgy: 31, rarity: 6, size: 490},
	{name: "Nearl", picture: "chara/nearlter.png", bgx: 64, bgy: 14.5, rarity: 6, size: 470},
	{name: "Flametail", picture: "chara/flametail.png", bgx: 60, bgy: 17, rarity: 6, size: 440},
	
	-5 Stars-
	{name: "Kirara", picture: "chara/kirara.png", bgx: 48, bgy: 15, rarity: 5, size: 390},
	{name: "Bena", picture: "chara/bena.png", bgx: 55, bgy: 17, rarity: 5, size: 350},
	{name: "La Pluma", picture: "chara/pluma.png", bgx: 58, bgy: 18, rarity: 5, size: 460},
	{name: "Tequila", picture: "chara/tequila.png", bgx: 50, bgy: 10, rarity: 5, size: 440},
	{name: "Mulberry", picture: "chara/mulberry.png", bgx: 50, bgy: 15, rarity: 5, size: 390},
	{name: "Ashlock", picture: "chara/ashlock.png", bgx: 40, bgy: 33, rarity: 5, size: 510},
	{name: "Corroserum", picture: "chara/corroserum.png", bgx: 49.5, bgy: 10, rarity: 5, size: 420},
	{name: "Honeyberry", picture: "chara/honeyberry.png", bgx: 39, bgy: 12, rarity: 5, size: 350},
	{name: "Wild Mane", picture: "chara/wildmane.png", bgx: 50.5, bgy: 36, rarity: 5, size: 540},

	-4 Stars-
	{name: "Indigo", picture: "chara/indigo.png", bgx: 48.5, bgy: 16, rarity: 4, size: 430},
	{name: "Roberta", picture: "chara/roberta.png", bgx: 51, bgy: 7, rarity: 4, size: 400},
	{name: "Pudding", picture: "chara/pudding.png", bgx: 43, bgy: 24, rarity: 4, size: 440},

	-1 Star-
	{name: "Justice-K", picture: "chara/jk.png", bgx: 40, bgy: 35, rarity: 1, size: 260},
	*/

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
	card.id = "logo"
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
let chosen = []

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
		let index = i<6?i:i-1
		card.querySelector(".solorandom").addEventListener('click', function(){
			generateOperator(index)
		})
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
	random.push({"random": 0, "i": temp.i})
}

function randomizeOperators(){
	for (let i = 0; i < random.length; i++) random[i].random = Math.random()
	random.sort(function(a, b){return a.random-b.random})
}

function randomizeCard(i){
	let entry = random.pop()
	const operator = operators[entry.i]
	chosen[i] = operator
	chosen[i].i = entry.i
	updateCard(i)
}

let shuffleTimer
let shuffleInterval

function handleButtonClick(){
	clearTimeout(shuffleTimer)
	clearInterval(shuffleInterval)
	shuffleTimer = setTimeout(function(){
		clearInterval(shuffleInterval)
		generateOperators()
		console.log(chosen)
	}, 1500)
	shuffleInterval = setInterval(generateOperators, 100)
}

let sortName = document.getElementById("sortName")
let sortRank = document.getElementById("sortRank")
let sortNameState = 0;
let sortRankState = -1;
sortRank.classList.toggle("descending", true)

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
	if(sortNameState == 0) return
	chosen.sort(sortNameState == 1 ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.name.localeCompare(a.name))
	rearrangeCards()
	updateCards()
}

function sortCardsByRank(){
	if(sortRankState == 0) return
	chosen.sort(sortRankState == 1 ? (a, b) => a.rarity - b.rarity : (a,b) => b.rarity - a.rarity)
	rearrangeCards()
	updateCards()
}

function rearrangeCards() {
	const temp = []
	chosen.forEach((operator, i) => {
		const index = i%2 == 0 ? i/2 : (i+1)/2+5
		temp[index] = operator
	})
	chosen = temp
}

function updateCards() { chosen.forEach((operator, i) => updateCard(i)) }

function updateCard(i) {
	const operator = chosen[i]
	cards[i].style = `background: url(${operator.picture}) no-repeat; background-position: ${operator.bgx}% ${operator.bgy}%; background-size: ${operator.size}%;`
	cards[i].querySelector(".nameplate .name").innerText = operator.name
	for (let o = 1; o <= 6; o++) cards[i].querySelector(".nameplateshadow").classList.toggle(`rarity-${o}`, false)
	cards[i].querySelector(".nameplateshadow").classList.toggle(`rarity-${operator.rarity}`, true)
	cards[i].querySelector(".solorandom").classList.toggle("hidden", false)
}

console.log("Find me on YouTube: XomeZest")
console.log("Any suggestions or bugs? Sent me a message through Discord: XomeZest#8952")
