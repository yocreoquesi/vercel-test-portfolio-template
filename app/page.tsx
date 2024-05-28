import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1>
      The Exercise
      </h1>

      <h2>
      1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a
brief explanation for each.
      </h2>
      <p>
        {``}
      </p>

      <h2>
      2. What do you want to learn or do more of at work?
      </h2>
      <p>
        {`I would like to focus on enhancing my customer-facing skills and further improving my incident and resource management skills. Improving technical skills is more of a byproduct than a primary goal for me.`}
      </p>

      <h2>
      3. Describe how you solved a challenge or technical issue that you faced in a previous role
(preferably in a previous support role). How did you determine that your solution was
successful?
      </h2>
      <p>
        {`One of the issues I resolved in my current position was a ticket I had with a customer who was reporting "Errors parsing logs intermittently" The same log line was being parsed correctly sometimes while other times it wasn't. This was breaking their metrics as well as their alerts for those events.

The first challenge was that the incident was intermittent. This was a clear sign that something was different between those logs, even if they looked the same.
Before investigating further I assisted him with a mitigation solution using a custom parser for those problematic log lines. I thought it was important their alerts worked as expected before asking them to test or provide us with information.
I initially asked the customer to provide us with a log sample, which he did, but he pasted it into a document instead of sending us a raw log output. I wrongly assumed they were doing it right, and I should’ve been more specific with my instructions.
I tested with them and wasn’t able to reproduce the customer’s issue with the logs provided so, this time I specifically asked them to provide those raw log files.
At first glance, they were the same, but this time, I was able to reproduce the parsing problem. So, I double-checked if there was any special character breaking the regex we use for parsing. Using an online ASCII translator, I found that somehow, some of their empty spaces were other ASCII characters instead.

After pointing this out and showing the evidence to the customer, I asked them to fix their app and follow up with us to verify that the problem was completely solved. Once they deployed their new fixed app, I assisted them with the verification process and disabled the custom parsing I made. Based on the customer’s feedback and our app log parsing, we were able to confirm that the solution was successful.

A few lessons I learned or why I think this was an interesting case.
Any small problem can take way longer than expected to fix it.
It's important to double check the information provided by the customer as well as being very specific on what and how you need them to test.
Providing remediation in the first place minimized the impact of this problem and made all the communications with the customer much smoother and less urgent. 
The final thing I did was to share some feedback with our dev team to identify some of those problematic unintentional characters replacing them by an empty space instead before parsing the log line.`}
      </p>

      <h2>
      4. When would you choose to use Edge Functions, Serverless Functions, or Edge
Middleware with Vercel?
      </h2>
      <p>
        {``}
      </p>

      <h2>
      5. Imagine a customer writes in requesting help with a build issue on a framework or
technology that you've not seen before. How would you begin troubleshooting this and
what questions would you ask the customer to understand the situation better?
      </h2>
      <p>
        {``}
      </p>

      <h2>
      6. The customer from question 5 replies to your response with the below:
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it
out. It must be a platform issue so just fix it for me instead of asking me questions.”
Please write a follow-up reply to the customer.
      </h2>
      <p>
        {``}
      </p>

      <h2>
      7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path
to https://example.com?" Please write a reply to the customer. Feel free to add any
information about your decision making process after the reply.
      </h2>
      <p>
        {``}
      </p>

      <h2>
      8. A customer is creating a site and would like their project not to be indexed by search
engines. Please write a reply to the customer. Feel free to add any information about
your decision making process after the reply.
      </h2>
      <p>
        {``}
      </p>

      <h2>
      9. What do you think is one of the most common problems which customers ask Vercel for
help with? How would you help customers to overcome common problems, short-term
and long-term?
      </h2>
      <p>
        {``}
      </p>

      <h2>
      10. How could we improve or alter this familiarisation exercise?
      </h2>
      <p>
        {``}
      </p>






      











      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
