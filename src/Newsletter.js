import React from "react";
// import "./Newsletter.css"; // import CSS for styling

const Newsletter = () => {
  // Topics with titles and content
  const topics = [
    {
      title: "Dear Families,",
      content:
        "My name is Jeremiah, and I am excited to introduce myself as your child's teacher. I come to the classroom with a passion for literacy and a belief that every student can grow as a reader, regardless of where they start. Throughout my teaching journey, I have seen how a tailored approach to literacy can make a difference, especially regarding remediation and intervention. Literacy is not just about reading and writing; it is about helping students unlock their potential and feel confident in their abilities. I aim to create an environment where students are supported and empowered to succeed.",
    },
    {
      title: "🍁 Building Relationships with Students",
      content:
        "When I think about engaging students in literacy, I always start with relationships. I prioritize knowing my students' interests, attitudes toward reading, and feelings about school. This effort shows that I care about them and can better understand how they learn and what motivates them. For example, one student of mine deeply loved baseball but struggled with reading. I saw his engagement soar by weaving baseball themes into our literacy work. It is all about finding what clicks for each child and using that to create growth opportunities.",
    },
    {
      title: "🎃 Motivating and Building Confidence in Readers",
      content:
        "A crucial part of my job is motivating students who might still need to see themselves as readers. Whether students are just beginning to decode words or reading chapter books independently, they must feel like their efforts matter. I focus on celebrating small wins—whether getting through a challenging paragraph or discovering a book they genuinely enjoy. Encouragement, patience, and consistent feedback go a long way. I also set up reading challenges that are attainable but push each student at their level, helping them build confidence step by step.",
    },
    {
      title: "👻 Organizing a Research-Based Learning Environment",
      content:
        "My classroom structure takes advantage of best practices in literacy intervention. I use flexible groupings to ensure students get the support they need, whether in a small group or one-on-one. Every lesson is research-backed, from phonemic awareness exercises for early readers to comprehension strategies for more advanced learners. I allow adaptability in my classroom to enhance differentiated instruction for all learners.",
    },
    {
      title: "🍎 Creating a Print-Rich Environment",
      content:
        "A print-rich environment involves much more than posters and word walls; it is an atmosphere in which children will immerse themselves, carrying out inquiries into language. I want my classroom to become one where students will feel enveloped with literacy opportunities. You will find notebooks in each corner, charts highlighting essential vocabulary, and writing stations that invite students to engage with words. This environment supports remediation by making reading and writing an integral part of every subject, not an isolated activity.",
    },
    {
      title: "🌽 Weaving Literacy into Every Subject",
      content:
        "Literacy is for more than just a reading class. I incorporate disciplinary literacy into my teaching, teaching reading and writing strategies across all subjects: science, social studies, and math. For instance, during a science lesson, students can read an article about a recent experiment, highlight the essential details, and discuss vocabulary. This will allow me to reinforce my literacy skills throughout the day; thus, the interventions will feel seamless and part of the broader learning experience. ",
    },
    {
      title: "🍬 Using Technology to Support Literacy",
      content:
        "Technology plays a big role in my approach to literacy instruction. Raz-Kids or Epic! provides students with exceptional resources to practice at home using engaging text. These tools allow for personalized reading, where students can listen to stories, read along, and complete quizzes that help with comprehension. I also recommend that families explore apps like Khan Academy Kids, which makes learning interactive and fun and supports what we do in class. These resources are easy to use at home and reinforce literacy outside school hours.",
    },
    {
      title: "In closing,",
      content:
        "I am here to partner with you to ensure your child thrives in literacy and beyond. Together, we can build a strong foundation that supports their reading journey every step of the way.",
    },
  ];

  return (
    <div className="newsletter">
      <header className="newsletter-header">
        <h1>Welcome to Mr. Strzelczyk's October Newsletter! 🎃</h1>
        <p>Hi there, 2nd graders! 🍂</p>
        <p>Let's explore the exciting things happening this month!</p>
      </header>

      <section className="newsletter-body">
        <h2>October Topics</h2>
        {topics.map((topic, index) => (
          <div key={index} className="topic-section">
            <h3>{topic.title}</h3>
            <p>{topic.content}</p>
          </div>
        ))}

        <p>Sincerely,</p>
        <p>Mr. Strzelczyk</p>
      </section>

      <footer className="newsletter-footer">
        <p>Get ready for lots of fun and learning this October! 🍁👻</p>
      </footer>
    </div>
  );
};

export default Newsletter;
