<script>
  import NavbarGuest from "../component/navbar_guest.svelte";
  import Footer from "../component/footer.svelte";

  let listExplores = [
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_b5e8d78b-a0e0-4ca0-9179-e18252134b11.jpg",
      title: "LEARN TO HANDSTAND",
      category: "SKILLS",
      coach: "Briohny Smyth",
      level: "Intermediate",
      count: "12",
      member: "2713",
      desc:
        "Learn to fly with confidence. This 21-day series will give you the tools and techniques you need to build a strong foundation for your handstand practice. You’ll start each week with drill classes, which will help you learn correct alignment and how to warm up for handstands to keep your body safe. Then, you’ll work through a technique class that will teach you the different ways to transition in and out of handstand. Finally, you’ll put what you’ve learned into practice twice a week with full-length handstand flows to get you upside down. With handstands, it’s all about the journey. By committing to a regular handstand practice, you’ll learn the art of patience, gain confidence in your skills, and add fun and playfulness to your time on the mat.\n\nIn this series, you will:\n\n- Learn essential tips and techniques for getting into handstand\n\n- Build confidence, strength, and flexibility in your handstand practice\n\n- Improve your body awareness and balance on and off the mat\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_ccdf0755-4009-4afe-99c0-1bfd8ebfeffa.jpg",
      title: "MORNING RITUAL: DAILY MEDITATIONS",
      category: "MINDFULNESS",
      coach: "Kirat Randhawa",
      level: "Beginner",
      count: "7",
      member: "6449",
      desc:
        "Arrive into your day with calm and ease. This series will help you create a morning meditation ritual that will cultivate more intentionality in your thoughts and actions. Each mindfulness meditation explores a theme that will set the tone for your day, such as focus, wisdom, and appreciation. Through consistent practice, you’ll be able to approach life with a deeper sense of awareness and learn to respond rather than react. By taking time to connect with your body and ground your mind each morning, you’ll meet the day with a greater sense of alignment, clarity, and intention.\n\nIn this series, you will:\n\n- Explore the foundations of mindfulness meditation\n\n- Create a daily morning meditation ritual\n\n- Bring calm and balance to your day\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_aeb1f60b-698e-4abb-b829-ab89b20d0eee.jpg",
      title: "UNWIND: EVENING YOGA",
      category: "YOGA",
      coach: "Carling Harps",
      level: "Moderate",
      count: "7",
      member: "16376",
      desc:
        "Let go and flow with Unwind: Evening Yoga. These classes will help you shake off the stress of the day and release tension in your body to prepare you for peaceful sleep. Craft your own evening ritual with classes that follow the ebb and flow of the week, from an active Monday stretch to a slow Sunday simmer — or practice out of order to match your energy. For days when you just need to move, choose a more vigorous flow with strong poses and arm balances. Or for a more mellow experience, choose a class with breathwork and seated stretches. Prepare to let go, reflect, and settle your body and mind for a restful evening and a new day ahead.\n\nIn this series, you will:\n\n- Stretch out your body and release tension from the day\n\n- Calm your mind and relax your breathing\n\n- Boost your mood, improve your focus, and reduce stress\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_8f7d9355-9a20-43d3-896d-2d7a0115a598.jpg",
      title: "14-DAY MEDITATION HABIT",
      category: "MINDFULNESS",
      coach: "Jackie Stewart",
      level: "Beginner",
      count: "15",
      member: "21158",
      desc:
        "Learn to cultivate a daily meditation practice with 14-Day Meditation Habit, a two-week program to help you ease into a regular mindfulness routine. This series is perfect if you’ve always wanted to meditate and don’t know where to begin, or you want to bring consistency to your current practice. These classes are designed to unfold as a progression, beginning with five-minute meditations that gradually lengthen as you gain confidence to sit for longer periods of time. The benefits of consistent meditation are many — by creating a daily practice, you’ll help reduce your stress, bring peace to your life, and deepen your inner connection. You’ll gain the tools and techniques to consistently show up for yourself and respond to life’s challenges with presence, grace, and ease.\n\nIn this series, you will:\n\n- Create a daily meditation habit over 14 days\n\n- Reduce your stress and improve your sleep\n\n- Increase your focus, enhance your self-awareness, and develop mental flexibility\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_f52a5f1f-65c3-490b-8b27-3f6423033b27.jpg",
      title: "SWEAT AND TONE",
      category: "FITNESS",
      coach: "Callie Gullickson",
      level: "Intermediate",
      count: "7",
      member: "39137",
      desc:
        "Sweat and Tone is a seven-day bodyweight training program designed to boost your strength and endurance over the course of a week. You’ll sweat it out with a fun and athletic blend of strength and HIIT exercises that will build lean muscle in the quickest way possible. From cardio and plyometrics to boxing-inspired movements, these workouts will keep you guessing and get your body firing on all cylinders. At the end of each class, you’ll feel like a champion — strong, empowered, and ready to take on the next challenge.\n\nIn this series, you will:\n\n- Strengthen and tone your entire body\n\n- Increase your balance, flexibility, and endurance\n\n- Get a full strength and cardio workout — no equipment necessary\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_0405a9b9-c9ad-490f-881e-a3371f8603c7.jpg",
      title: "BODYWORK",
      category: "FITNESS",
      coach: "Caley Alyssa",
      level: "Intermediate",
      count: "6",
      member: "13087",
      desc:
        "Fine-tune your strength and optimize your performance with the BodyWork system. BodyWork’s optimal training approach will reprogram your current movement patterns to build total-body strength and mobility in a balanced way. This method of training allows your muscles to fire up more efficiently and effectively, accelerating the burn and speeding up your recovery time. Whether you’re an athlete, a yogi, or new to fitness, this series is a healthy way to enhance your current movement routine.\n\nIn this series, you will:\n\n- Build a strong, defined, and balanced body\n\n- Increase your joint health and mobility\n\n- Elevate your athletic performance\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_d00c47b4-2a5a-4cf9-955c-310259a4f2c5.jpg",
      title: "FLOW STATE",
      category: "YOGA",
      coach: "Patrick Beach",
      level: "Intermediate",
      count: "7",
      member: "12538",
      desc:
        "Drop into the flow and tune into your body. This series features strong, fluid yoga classes with minimal cueing to help you enter the flow state — a meditative state of energized focus. You'll sweat out the stress of the day and ride the waves of your breath through challenging, creative sequences that will help you fully embody each pose and bring presence to your practice. When you spend more time in the flow state, you’ll experience greater joy, creativity, and ease in daily life.\n\nIn this series, you will:\n\n- Open and strengthen your body\n\n- Improve your focus and body awareness\n\n- Challenge and deepen your yoga practice\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_80ed5d3f-4f34-4951-b5c8-32a58be04116.jpg",
      title: "TRAIN360",
      category: "FITNESS",
      coach: "Callie Gullickson",
      level: "Intermediate",
      count: "14",
      member: "9737",
      desc:
        "Rise to the challenge with Train360, a four-week program to transform your body and get you stronger from the inside out. Each week will bring you a variety of workouts, from HIIT and cardio to strength and mobility. By switching up your movement patterns and pacing, you’ll prevent plateaus and continually challenge your body so you can get the most out of your workouts. You'll also get Callie's expert insight on goal setting, training, and recovery with weekly wellness talks. On the other side of challenge, there’s so much room for opportunity and growth. Prepare to push your limits for a 360-degree transformation.\n\nIn this series, you will:\n\n- Achieve strength in body and mind\n\n- Boost your endurance and stamina\n\n- Reach your peak performance\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_76fd7128-7a17-4e1b-9f06-a4242c096f33.jpg",
      title: "POWER AND CHILL YOGA",
      category: "YOGA",
      coach: "Caley Alyssa",
      level: "Intermediate",
      count: "8",
      member: "11256",
      desc:
        "Tune into your body and give it exactly what it needs. This yoga series has power flows to push you, chill flows to wind you down, and flows with a little bit of both to bring you into balance. Each sequence is crafted with time and energy output in mind, allowing you to pick the class your body truly needs on any given day. The Power classes have a faster pace and focus on building heat and linking breath to movement. The Chill classes are slower with longer holds and deeper stretches. For days when you can’t make up your mind, Power and Chill classes mix the best of both worlds. By finding a flow to match your energy, you’ll feel more balanced, grounded, and ready to take on the rest of your day.\n\nIn this series, you will:\n\n- Find a flow to match your energy\n\n- Gain strength and flexibility\n\n- Calm your mind and connect to your body\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_31d529a4-275a-4efe-8262-0e0196422f7c.jpg",
      title: "THE BREATH SEQUENCE",
      category: "MINDFULNESS",
      coach: "Dylan Werner",
      level: "Beginner",
      count: "9",
      member: "9318",
      desc:
        "Tap into the natural power of your breath. The Breath Sequence combines ancient pranayama techniques and modern, scientifically proven breathing exercises to completely transform your well-being. This series contains 10 breathwork classes that are energetically sequenced to help you move toward a specific mental or physical goal, such as deep relaxation and enhanced athletic performance. By learning how to take control of your breath, you’ll be better able to take control of your life.\n\nIn this series, you will:\n\n- Reduce stress, anxiety, and physical tension\n\n- Boost your energy, focus, and memory\n\n- Improve your athletic performance and recovery\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_a3a898a3-3149-4dad-847a-2c603f8c9c00.jpg",
      title: "BARRE STRONG",
      category: "FITNESS",
      coach: "Emily Sferra",
      level: "Intermediate",
      count: "8",
      member: "28046",
      desc:
        "Barre Strong is an empowering 7-day program designed to push you to your max effort for fast results you’ll see and feel. You’ll move to the music with six targeted barre classes and one total-body class that will build deep strength in every area of your body. Each workout follows the signature barre style — small rhythmic movements and high repetitions to burn out your muscles, with the option to add weights to amp up the challenge. These classes are hard, short, and effective, allowing you to maximize your workout while easily fitting it into your day. Challenge yourself over 7 days for the total barre experience, or choose whatever class you need to get your daily barre fix.\n\nIn this series, you will:\n\n- Build deep strength in every major muscle group\n\n- Push to your max effort, focus, and endurance\n\n- Get a challenging barre workout in just 20 minutes a day\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_290834f5-ba20-43ef-a532-03e22671edd1.jpg",
      title: "KHALSA WAY PRENATAL YOGA",
      category: "YOGA",
      coach: "Wah Khalsa & Gurmukh Kaur Khalsa",
      level: "Beginner",
      count: "8",
      member: "2211",
      desc:
        "Empower your pregnancy journey with Khalsa Way Prenatal Yoga. Through movement, breathwork, and meditation, this series will guide you through every stage of pregnancy while tapping into your natural intuition as a mother. This is not just a physical practice — it is one equally of the heart and soul. These classes will help keep your body healthy and strong as you prepare for labor, calm your emotions and relieve anxiety, and connect you to your baby and your body as you progress in your pregnancy towards birth. You’ll end each class feeling calm, confident, and courageous.\n\nIn this series, you will:\n\n- Build your strength and confidence in preparation for labor\n\n- Relieve stress and anxiety\n\n- Connect to your natural intuition as a mother\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_7352fe0a-ebf7-4ec9-89ac-fd5b3d060b47.jpg",
      title: "SCHOOL OF ARM BALANCE",
      category: "SKILLS",
      coach: "Dylan Werner",
      level: "Moderate",
      count: "13",
      member: "18526",
      desc:
        "Learn to lift off with Dylan Werner’s School of Arm Balance. Arm Balances are powerful tools that can help us overcome fear, build trust, and develop a deeper connection to the self. In this series, you’ll work through instructional classes that break down the mechanics of 13 popular arm balances, from beginner to complex. Each short tutorial-style video will teach you step-by-step ways to enter each pose, creative modifications, and how to use props to support you. Whether you’re new to arm balances or want to learn more challenging poses, this fun series will take your skills to new heights.\n\nIn this series, you will:\n\n- Learn how to do 13 key arm balances\n\n- Gain a deeper understanding of alignment and technique\n\n- Build trust and confidence in your arm balance practice\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_c95c6bdd-1101-4c2e-964b-d5cc07db372a.jpg",
      title: "CORE SCULPT",
      category: "FITNESS",
      coach: "Ashley Galvin",
      level: "Intermediate",
      count: "7",
      member: "34131",
      desc:
        "Strengthen and tone your entire core with this high-energy, seven-day workout series. Each core-torching session will put you to work, make you sweat, and give you fast results through both targeted and circuit-style training. You’ll blast your core with challenging, high-rep exercises that target your front and side body, deep core muscles, and hard-to-reach lower abs. Each class is 20 minutes or less with no breaks and no moments wasted — after seven days, you will see and feel the difference.\n\nIn this series, you will:\n\n- Sculpt and tone your core muscles\n\n- Improve your stability, posture, and balance\n\n- Increase your overall fitness performance\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_230c538f-954d-4fe6-bb19-8579a325f76d.jpg",
      title: "DEEPEN YOUR BACKBENDS",
      category: "SKILLS",
      coach: "Kayla Nielsen",
      level: "Intermediate",
      count: "14",
      member: "8372",
      desc:
        "This series is a physical and energetic exploration of the backbending practice. You’ll tap into your heart space and explore the emotions that arise while deepening your flexibility in six peak backbends: Wild Thing, Camel, King Pigeon, Wheel, King Dancer, and Bow. Each peak pose features a drill class and a full-length flow, and there are two meditations to help you tune into your emotions. With backbending, it’s important to meet yourself where you are each time you step on the mat. Resolve to show up in a gentle way and be patient with yourself as your journey unfolds.\n\nIn this series, you will:\n\n- Deepen your flexibility in six backbending yoga poses\n\n- Strengthen your upper body and improve your posture\n\n- Release tension, stagnant energy, and stored emotions\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_eac3bb9a-d948-414f-99ed-fc84f1002a96.jpg",
      title: "7-DAY BARRE BODY",
      category: "FITNESS",
      coach: "Adrienne Kimberley",
      level: "Advanced",
      count: "7",
      member: "15401",
      desc:
        "What is a barre body? It’s a body that feels enlivened, empowered, and strong. In this 7-day series, you’ll energize your day with total-body barre workouts to build deep strength and challenge your endurance. Expect rhythmic micro-movements combined with functional exercises and sweaty cardio bursts. At the end of the week, you’ll wrap things up with a restorative barre stretch. While these workouts are low impact, they are not low intensity — you’ll end each class feeling fully worked, invigorated, and ready to take on a new challenge.\n\nIn this series, you will:\n\n- Build deep strength in every major muscle group\n\n- Engage your entire body to build stamina and endurance\n\n- Improve your alignment and posture\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_e244c92c-7495-4c7f-820c-51046bfe47ae.jpg",
      title: "LOW IMPACT STRENGTH",
      category: "FITNESS",
      coach: "Claudine Lafond",
      level: "Moderate",
      count: "6",
      member: "11533",
      desc:
        "Get a fiery, full-body workout without the added pressure on your joints. Low Impact Strength features six workouts designed to be accessible to anyone, especially those dealing with joint pain or recovering from injury. But low impact doesn’t mean low intensity — you’ll challenge yourself with dynamic cardio bursts and functional training exercises such as squats, lunges, presses, and lifts, everyday movements that require stability and strength. By incorporating functional training into your workouts, you’ll set yourself up for long-term sustainability in your fitness routine. Prepare to leave each workout feeling stronger, refreshed, and energized from head to toe.\n\nIn this series, you will:\n\n- Sculpt your muscles and build total-body strength\n\n- Improve your cardio, flexibility, and endurance\n\n- Get a full-body workout without added pressure on your joints\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_82b9e68e-7c60-476b-b8eb-028c627d84e2.jpg",
      title: "DISCOVER YOUR SPLITS",
      category: "SKILLS",
      coach: "Kayla Nielsen",
      level: "Intermediate",
      count: "14",
      member: "37948",
      desc:
        "Tap into your flexibility and deepen your connection with this monthlong journey to splits. Each week, you’ll open and strengthen your hips with five drill classes and a peak pose flow. The final flow of the series gives you an opportunity to put all your hard work together and stretch into full splits. Working into your hips can release powerful emotions, so before each flow, you’ll meditate on a journal prompt to help you untangle those feelings while you’re moving on the mat. Afterwards, you can process your emotions by writing in your journal. Whether you’re working toward splits or they’re a regular part of your practice, this series is for anyone looking to connect to themselves on a deeper level.\n\nIn this series, you will:\n\n- Open and strengthen your hips to prepare for full splits\n\n- Increase your flexibility and range of motion\n\n- Connect to your emotions on a deeper level\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_4015c1e1-a3bb-450a-9278-e361cfd4b22c.jpg",
      title: "YAMAS IN MOTION",
      category: "YOGA",
      coach: "Naya Rappaport",
      level: "Intermediate",
      count: "5",
      member: "11211",
      desc:
        "Bring balance to your life with Yamas In Motion, a series of five invigorating flows based on the first limb of Patanjali’s Eight Limbs of Yoga. The Yamas are guideposts for your life that will transform your perspective and positively shift how you show up in the world. Through a combination of movement, breathwork, mantras, and mudras, this series will give you tools to be more present, mindful, and focused in your life. Prepare to wake up from the inside out as you explore topics such as compassion, truth, gratitude, moderation, and what it truly means to let go. By applying what you’ve learned in a concrete way on your mat, you’ll be able to better apply these lessons in your life.\n\nIn this series, you will:\n\n- Explore the Yamas through five heat-building flows\n\n- Increase your stamina, strength, and flexibility\n\n- Gain a renewed sense of vitality and clarity\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_15d3dc3b-02de-4a01-a1d2-2e07b47b83b8.jpg",
      title: "ULTIMATE BARRE BURN",
      category: "FITNESS",
      coach: "Adrienne Kimberley",
      level: "Intermediate",
      count: "11",
      member: "22805",
      desc:
        "Get ready for 21 days of pure sweat. Ultimate Barre Burn will give you a total-body barre workout with dynamic strength exercises, cardio bursts, and fiery sequencing for fast results in under 20 minutes a day. You’ll alternate between targeted, total-body, and endurance workouts to light up your muscles, build deep strength, and leave your entire body feeling worked. At the end of each week, you’ll restore your tired muscles with a soothing stretch session. This series is perfect if you’re short on time but want to take your workouts to the next level. Let’s kick up the heat and get started!\n\nIn this series, you will:\n\n- Get a total-body workout in under 20 minutes\n\n- Build deep strength, flexibility, and endurance\n\n- Feel energized, challenged, and empowered\n\nREAD MORE",
    },
    {
      pict:
        "https://d357mttm70bw7x.cloudfront.net/normal_958678c6-7eba-464d-ad2f-80f139dac21d.jpg",
      title: "21-DAY YOGA SWEAT",
      category: "YOGA",
      coach: "Briohny Smyth",
      level: "Intermediate",
      count: "6",
      member: "44935",
      desc:
        "Boost your strength and endurance with 21-Day Yoga Sweat. Each powerful ladder flow begins with a series of strong poses, then adds more complex and creative movements to the sequence to amp up the intensity. You’ll build heat through continuous movement, high-energy repetitions, arm balances, and inversions for a full-body burn in a short period of time. This is the sweaty, invigorating practice you’ve been looking for — prepare to get your heart rate up, feel strong in your body, and drop into the flow.\n\nIn this series, you will:\n\n- Strengthen, stretch, and tone your body over 21 days\n\n- Flow through creative transitions and powerful poses\n\n- Improve your body awareness and control\n\nREAD MORE",
    },
  ];
</script>

<NavbarGuest />

<div
  class="text-center bg-light"
  style="margin-top:73px;padding-top:70px;padding-bottom:60px"
>
  <h1 class="text-arq">INSTRUCTORS</h1>
</div>

<div class="container-fluid">
  <div class="row">
    <div class="col-2">

      <div class="p-4">
        Left menu
      </div>

    </div>
    <div class="col-10">

      <div class="row p-4">
        {#each listExplores as { pict, title, category, coach, level, count, member, desc }}
          <div class="col-4 p-4">
            <span class="btn btn-light text-arq no-radius" style="position:absolute;z-index:700"><small>{category}</small></span>
            <div class="card no-radius">
              <img src={pict} class="card-img-top no-radius" alt="..." />
              <div class="card-body px-0">
                <h4 class="card-title text-arq text-center">{title}</h4>
                <h5 class="text-prox text-center mb-4">{coach}</h5>
                <div class="row mt-4">
                  <div class="col text-start">{count}</div>
                  <div class="col text-center">{level}</div>
                  <div class="col text-end">{member}</div>
                </div>
                <hr/>
                <div class="text-maxline text-prox">{desc}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>

    </div>
  </div>

  
</div>

<Footer />

<style>
  .text-arq {
    font-family: "Arquitecta", Helvetica, Arial, sans-serif;
  }

  .text-prox {
    font-family: "Proxima-Nova", Helvetica, Arial, sans-serif;
  }

  .no-radius {
    border-radius: 0px !important;
    border: none !important;
  }

  .text-maxline {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}
</style>
