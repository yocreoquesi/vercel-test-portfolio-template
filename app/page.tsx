import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      The Exercise
      </h1>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a
brief explanation for each.
      </h2>
      <p>
        {`My Favourte support tasks:
    1. Work with engineering teams during incidents and provide updates to internal and external stakeholders. 
    Working with other teams and communicating with customers during incidents has proven to be exciting and critical for both the customers and the company. It makes me feel that support is relevant to the company and encourages me to learn from others.
    2. Dig through logs to troubleshoot a customer's broken project. 
    I'm curious by nature so knowing how things work and why it doesn't work lures me.
    3. Respond to 25+ support requests via email every day. 
    I know that numbers are not always relevant but doing more usually makes me feel that I'm performing fine. It just feels good not to be bored.
    4. Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites. 
    Responding to such queries is not always part of support responsibilities, but sometimes, I have that "urge to respond to something that you know" and can also help others in the future. Stack Overflow has helped me and inspired me, I guess.
    5. Write and maintain support articles and docs pages. 
    Bad documentation is one of the most common sources of trouble for support. It's for our own sake to keep it updated.

    -My least favourite support tasks
    1. Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub. 
    Let's admit it: I'm not a developer and am not willing to be, so it's unlikely that I'll spend time digging repos seeking bugs.
    2. Create video tutorials to help teach users a specific feature or use case. 
    Useful but this is better handled by a marketing or creative team instead. They will be more versed in the content creation than support.
    3. Find and recruit teammates for the support team. 
    I can understand that is sometimes necessary, but this should generally be among the support team tasks. This is more of a recruiter task to me.
    4. Run ticket review sessions to ensure consistency in tone. 
    This can be useful but is not among my favourite tasks.
    5. Work with the product team to develop a new feature based on feedback from customers. 
    I'm not against reporting a feature request but I don't feel that support has to follow or assist with the development of a new feature. That should be a product and dev team task instead.
        `}
      </p>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      2. What do you want to learn or do more of at work?
      </h2>
      <p>
        {`I would like to focus on enhancing my customer-facing skills and further improving my incident and resource management skills. Improving technical skills is more of a byproduct than a primary goal for me.`}
      </p>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
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

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      4. When would you choose to use Edge Functions, Serverless Functions, or Edge
Middleware with Vercel?
      </h2>
      <p>
        {`I did not know all the vercel products, however according to their respective documentation pages... 
        Edge Middleware is code that executes before a request is processed suitable for tasks such as Redirects Rewrites Headers A/B Testing and Feature flags among others. Ref: https://vercel.com/docs/functions/edge-middleware   
        Edge Functions enables to store content close to the customers and run compute in regions close to their data, reducing latency and improving end-user performance. Suitable for tasks like caching content, Streaming data, Routing tasks, Regional content... https://vercel.com/docs/edge-network/overview 
        Serverless Functions enable running compute on-demand without needing to manage your own infrastructure, provision servers, or upgrade hardware good for task such as Process data in real-time, such as chat messages, AI data, or financial transactions, implement authentication and authorization logic, manage intensive tasks without impeding client-side performance. Ref: https://vercel.com/docs/functions
    `}
      </p>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      5. Imagine a customer writes in requesting help with a build issue on a framework or
technology that you've not seen before. How would you begin troubleshooting this and
what questions would you ask the customer to understand the situation better?
      </h2>
      <p>
        {`This is a common problem. Technology evolves faster than we do, and each customer is different, so it's not hard to find a new scenario or tech that you haven't seen before. I generally start by searching our internal knowledge base, documentation, or old tickets for a similar case. If I find nothing, I would check the official documentation available. If that is not enough to understand the customer's problem, I would ask other Vercel colleagues.
The first question is usually can you please indicate the documentation or reference you've followed to do this? In case it was necessary I would ask for a code sample to perform some tests as well as having more information to ask some developers if required. In any case, I would not bother the customer if I don't understand their needs first
        `}
      </p>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      6. The customer from question 5 replies to your response with the below:
“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it
out. It must be a platform issue so just fix it for me instead of asking me questions.”
Please write a follow-up reply to the customer.
      </h2>
      <p>
        {`Apologies if our previous messages didn't solve your issue. We understand your frustration, however, we need to identify the source of the problems, meaning that we require some information from your specific scenario, deployment or implementation. By no means we will ask you to do things if it is not necessary to solve your problem. For example, we've asked for a code sample to further look into this issue and reproduce the problem on our end to fully understand what causes it. We've asked for the reference documentation to have the same starting point you had when performing our tests or assumptions.

      Please rest assured that we will do our best to fix this as soon as possible. We will keep you posted through the process. 
      
      Regards,
      
      Vercel Support`}
      </p>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path
to https://example.com?" Please write a reply to the customer. Feel free to add any
information about your decision making process after the reply.
      </h2>
      <p>
        {`Hello,

Thanks for contacting Vercel Support.

If I understand correctly, you need a specific path from your app to redirect to a different destination URL. The technical word for such an action is “rewrite.” That is because you are not only redirecting from one path in your web to another, but you also have to Rewrite the URL headers from your initial request and send them again with a new URL. 

There are many ways of setting up rewrites, depending on your specific use case and deployment. Please have a look at our rewrite documentation: You can check our rewrite document here: https://nextjs.org/docs/app/api-reference/next-config-js/rewrites and feel free to reach out again if you need further assistance with the configuration.

Regards,

Vercel Support

// This time, instead of asking them for information about their deployment, I pointed them to the relevant documentation and gave them a brief explanation of their misunderstanding. I felt this was more efficient.
`}
      </p>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      8. A customer is creating a site and would like their project not to be indexed by search
engines. Please write a reply to the customer. Feel free to add any information about
your decision making process after the reply.
      </h2>
      <p>
        {`Thanks for reaching out to Vercel support. The easier way to prevent search engines indexing would be to add a robot.txt file under your app's main directory.  
This is an example of a robot.txt that will do the job
User-Agent: *
Disallow: /

You can find some more information about the robot.txt Vercel options you have here: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

Please, do not hesitate to contact us again if you need further assistance.

Regards,

Vercel Support

// My reply focused first on solving the customer’s problem providing a straight forward solution, after that, I gave him the reference documentation in case he needs to deeply understand how that has to be done and what other options he may have. This will ensure customer satisfaction focusing on the solution first and enhancing the response after with more information, and finally, an invitation to ask us again if he needs some more assistance. This last sentence is a bit standard but still relevant to show the customer that we are always open to assisting them.
`}
      </p>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      9. What do you think is one of the most common problems which customers ask Vercel for
help with? How would you help customers to overcome common problems, short-term
and long-term?
      </h2>
      <p>
        {`I would have guessed the main errors are build failures, deployment Issues, and performance problems. Those aspects are highly sensitive to the customer’s configuration and specific use cases, so I would guess those are the most common ones. 
However, I found relevant documentation with a different set of common Errors from the Vercel Dashboard: https://vercel.com/docs/errors/error-list
Although I'm not yet versed well enough to provide a meaningfull solution to overcome all of those problems. In the short term I would ensure we have good examples in our public documentation. In the long term, I would create a step-by-step tutorial so as not to miss anything, giving hints on the specific settings requirements as well as giving the documentation reference for each step/setting.
`}
      </p>

      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
      10. How could we improve or alter this familiarisation exercise?
      </h2>
      <p>
        {`Overall I felt it was a fair excercise, however I missed a bit more interaction with the Vercel platform but that might not fit too well into this especific role or it may increased the required time`}
      </p>






      











      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
