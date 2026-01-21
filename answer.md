1) Why is db.json not suitable as a database for real projects

db.json is a simple file used only for learning and small practice projects. It is not suitable for real applications because it has many limitations. File based storage is slow because the entire file must be read and written again for every change. This causes poor performance when data grows. It does not support multiple users at the same time so concurrent access can break the data. It is not reliable because if the server crashes while writing the file data can be lost. It also does not scale well because large files become difficult to manage and very slow.


2) What are the ideal characteristics of a database system apart from storage

A good database system should provide fast performance so data can be read and written quickly. It should support concurrency so many users can access the data at the same time without conflicts. Reliability is important so data is safe even if the system crashes. Data integrity ensures that data is always correct and consistent. Scalability allows the database to grow as users and data increase. Fault tolerance helps the system recover automatically from failures.


3) How many types of databases are there and what are their use cases

There are two main types of databases. Relational databases store data in tables with rows and columns and use a fixed schema. They are best for applications where data relationships are important such as banking systems school management systems and e commerce applications. Examples include MySQL and PostgreSQL.

Non relational databases also called NoSQL databases store data in flexible formats such as documents or key value pairs. They are useful for large scale applications that need high speed and flexibility such as social media platforms real time chat applications and big data systems.Examples include MongoDB and Redis.