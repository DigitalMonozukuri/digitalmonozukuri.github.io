---
layout: page
title: MemSQL
permalink: memsql-development/
categories: [Services]
---

<div class="page-header">
	<h1 class="page-title">MemSQL</h1>
</div>

<div id="main" class="row">
		
	<div id="primary" class="col-10">	
		<img src="{{ site.url }}/assets/images/web/memsql.jpg">
	</div>
			      		
	<div id="secondary" class="col-6">  			
		<div class="project-details">
			<h3>Overview</h3>

			<p>
				MemSQL is a distributed, in-memory database that is part of the NewSQL movement. It is an ACID-compliant RDBMS that most notably converts SQL into C++ through code generation. It is being developed by MemSQL Inc., that was founded in 2011 and is a graduate of the Y Combinator startup program. MemSQL Inc. has raised more than $5 million to date from a variety of investors including First Round Capital, IA Ventures, NEA, and several prominent angels including Paul Buchheit, Max Levchin, Aaron Levie, and Ashton Kutcher.
			</p>
				      			
			<p>
				Even though MemSQL stores data in memory, MemSQL is durable by implementing a write-ahead log and snapshots (similar to checkpoints). On default settings, as soon as a transaction is acknowledged in memory, the database will write the transaction to disk as fast as the disk will allow. MemSQL supports a native replication protocol that ships its transactional log to slaves. MemSQL currently supports master-slave replication.
			</p>
				      			
			<p>
				MemSQL is a distributed database that works by the concept of aggegators and leaf nodes. An aggregator is responsible for breaking up the query across the relevant leaf nodes and aggregating results back to the client. A leaf node is a MemSQL database. MemSQL uses hash partitioning to distribute data uniformly across the number of leaf nodes.
			</p>
				      			
			<div class="space"></div>
				      			
  			<h3>Project Details</h3>
  			<ul class="list">
  				<li>Proof of Concept</li> 
				<li>Do you already have a game concept in mind?</li> 
				<li>Flesh out the ideas!</li> 
				<li>Brainstorm with imaginative team</li> 
				<li>Have a capable developer like us who can make your game a reality!</li> 
  			</ul>
				      			
				      			
		</div>	      			
	</div>
</div>