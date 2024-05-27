import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      The Exercise
      </h1>
      <p className="mb-4">
        {`1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a
brief explanation for each.`}
      </p>

      <p className="mb-4">
        {`2. What do you want to learn or do more of at work?`}
      </p>

      <p className="mb-4">
        {`3. Describe how you solved a challenge or technical issue that you faced in a previous role
(preferably in a previous support role). How did you determine that your solution was
successful?`}
      </p>

      <p className="mb-4">
        {`4. When would you choose to use Edge Functions, Serverless Functions, or Edge
Middleware with Vercel?`}
      </p>

      <p className="mb-4">
        {`5. Imagine a customer writes in requesting help with a build issue on a framework or
technology that you've not seen before. How would you begin troubleshooting this and
what questions would you ask the customer to understand the situation better?`}
      </p>

      <p className="mb-4">
        {`6. The customer from question 5 replies to your response with the below:
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it
out. It must be a platform issue so just fix it for me instead of asking me questions.”
Please write a follow-up reply to the customer.`}
      </p>

      <p className="mb-4">
        {`7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path
to https://example.com?" Please write a reply to the customer. Feel free to add any
information about your decision making process after the reply.`}
      </p>

      <p className="mb-4">
        {`8. A customer is creating a site and would like their project not to be indexed by search
engines. Please write a reply to the customer. Feel free to add any information about
your decision making process after the reply.`}
      </p>

      <p className="mb-4">
        {`9. What do you think is one of the most common problems which customers ask Vercel for
help with? How would you help customers to overcome common problems, short-term
and long-term?`}
      </p>

      <p className="mb-4">
        {`10. How could we improve or alter this familiarisation exercise?`}
      </p>






      











      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
