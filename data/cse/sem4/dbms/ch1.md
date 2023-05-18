# Data Base Management system

#### Data
Data means known facts, which can be recorded and implicit 
meaning. data is also a collection of facts and figures.
#### Information
Information means processed or organized data.which can be
drived from data and facts.
#### Data-Item (field)
It is a character or group of characters that has a specific meaning.
e.g Rollno ,Name .
#### Record
It is a collection of logically related fields.Record consists of values 
for each field.
#### File
It is a collection related records.which arranged in a specific 
sequence  
### Metadata
Set of data that describes and givesinformation 
about another data.
In other words, data about data iscalled 
metadata.
### System Catalog
The system catalog is a collection of tables and 
views that contain important information about a 
database. A system catalog is available for each 
database.
### Data warehouse
A data warehouse is a decision support database 
that is maintained separately from the 
organization's operational database  

### Data dictionary
Data dictionary is a file that contains metadata that is
usually a part of the system catalog.
It have following for components:
- Entities
- Attributes
- Relationships
- Key

---
<img src="https://docs.relinklibrary.com/cdn/hero-illustration1light.png">

## Characteristics of DBMS
### Stores any kind of data
A database management system should be able to store any kind of data. Any 
kind of data that exists in the real world can be stored in DBMS because we 
need to work with all kinds of data that is present around us.
Support ACID Properties 
### Atomicity
Atomicity means that all transactions must follow “all or nothing” rule. Each 
transaction is said to be atomic. If one part of the transaction fails, the entire 
transaction fails.e.g consider an ATM transaction where you are moving money 
from one account to another. There are two parts in this transaction, first you 
remove money from one account, then you add money to another account. If 
one of these two parts fail, The entire transaction is considered invalid, and the 
transaction must be rolled back to the state before the transaction started.
### Consistency
This means that, the database will always be in a consistent state. Only valid 
data will be written to the database. E.g if a column is constrained to be NOT 
NULL and an application attempts to add a row with a NULL value in that 
column, the entire transaction must fail, and no part of the row may be added 
to the database.
