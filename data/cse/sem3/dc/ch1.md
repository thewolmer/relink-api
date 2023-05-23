**CHAPTER 1**\
**1. INTRODUCTION**\
Data communications (DC) is the process of using computing and
communication technologies to transfer data from one place to another,
and vice versa. It enables the movement of electronic or digital data
between two or more nodes, regardless of geographical location,
technological medium or data contents.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image1.png){width="5.831944444444445in"
> height="2.6805555555555554in"}
>
> **1.1Transmission Modes**
>
> Transmission mode refers to the mechanism of transferring of data
> between two devices connected over a network. It is also called
> Communication Mode. These modes direct the direction of flow of
> information. There are three types of transmission modes. They are:
>
> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image2.png){width="6.094443350831146in"
> height="1.6555555555555554in"}

***1.1.1 SIMPLEX MODE***

In this type of transmission mode, data can be sent only in one
direction i.e. communication is unidirectional.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image3.png){width="6.5in"
> height="1.1208333333333333in"}

***1.1.2 HALF DUPLEX MODE***

Half-duplex data transmission means that data can be transmitted in both
directions on a signal carrier, but not at the same time.

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image4.png){width="6.5in"
height="1.6291666666666667in"}

***1.1.3 FULL DUPLEX Mode***

In full duplex system we can send data in both the directions as it is
bidirectional at the same time in other words, data can be sent in both
directions simultaneously.

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image5.png){width="6.5in"
height="1.0958333333333334in"}

**1.2 COMPONENTS OF DATA COMMUNICATION**\
***1.2.1 Message***\
The message is the data or information to be communicated. It may
consist of text, number, pictures, sound, video or any a combination of
these.

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image6.png){width="6.5in"
height="2.1513877952755904in"}

***1.2.2 Sender***

Sender is a device that sends message. The message can consist of text,
numbers, pictures etc. it is also called source or transmitter.
Normally, computer is use as sender in information communication
systems.

***1.2.3 Receiver***

Receiver is a device that receives message. It is also called sink. The
receiver can be computer, printer or another computer related device.
The receiver must be capable of accepting the message.

***1.2.4 Medium***

Medium is the physical path that connects sender and receiver. It is
used to transmit data. The medium can be a copper wire, a fiber optic
cable, microwaves etc. it is also called communication channel.

***1.2.5 Software***

Software is used to provide remote access to systems and exchange files
and messages in text, audio and/or video formats between different
computers or users.

**1.3 Types of computer networks**

***1.3.1 Lan***

A computer network spanned inside a building and operated under single
administrative system is generally termed as Local Area Network (LAN).
Usually, LAN covers an organization offices, schools, colleges or
universities. Number of systems connected in LAN may vary from as least
as two to as much as 16 million. LAN provides a useful way of sharing
the resources between end users. The resources such as printers, file
servers, scanners, and internet are easily sharable among computers.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image7.png){width="5.822222222222222in"
> height="3.3333333333333335in"}

LANs are composed of inexpensive networking and routing equipment. It
may contain local servers serving file storage and other locally shared
applications. It mostly operates on private IP addresses and does not
involve heavy routing. LAN works under its own local domain and
controlled centrally.

LAN uses either Ethernet or Token-ring technology. Ethernet is most
widely employed LAN technology and uses Star topology, while Token-ring
is rarely seen.

LAN can be wired, wireless, or in both forms at once.

***1.3.2 Metropolitan Area Network***

The Metropolitan Area Network (MAN) generally expands throughout a city
such as cable TV network. It can be in the form of Ethernet, Token-ring,
ATM, or Fiber Distributed Data Interface (FDDI).

Metro Ethernet is a service which is provided by ISPs. This service
enables its

users to expand their Local Area Networks. For example, MAN can help an

  ------------------------------------------------------------------------------------------
  organization   to      connect   all     of      its     offices   in      a       city.
  -------------- ------- --------- ------- ------- ------- --------- ------- ------- -------

  ------------------------------------------------------------------------------------------

> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image8.png){width="5.822222222222222in"
> height="3.4694444444444446in"}

Backbone of MAN is high-capacity and high-speed fiber optics. MAN works
in

between Local Area Network and Wide Area Network. MAN provides uplink
for

LANs to WANs or internet.

***1.3.3 Wide Area Network***

As the name suggests, the Wide Area Network (WAN) covers a wide area
which

may span across provinces and even a whole country. Generally,

telecommunication networks are Wide Area Network. These networks provide

connectivity to MANs and LANs. Since they are equipped with very high
speed

backbone, WANs use very expensive network equipment.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image9.png){width="5.822222222222222in"
> height="3.3125in"}

WAN may use advanced technologies such as Asynchronous Transfer Mode
(ATM), Frame Relay, and Synchronous Optical Network (SONET). WAN may be
managed by multiple administrations.

**1.4 COMPUTER NETWORK TOPOLOGIES**

A Network Topology is the arrangement with which computer systems or
network devices are connected to each other. Topologies may define both
physical and logical aspect of the network. Both logical and physical
topologies could be same or different in a same network.

***1.4.1 Point-to-Point***\
Point-to-point networks contains exactly two hosts such as computer,
switches, routers, or servers connected back to back using a single
piece of cable. Often, the receiving end of one host is connected to
sending end of the other and vice versa.

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image10.png){width="5.822222222222222in"
height="1.0416666666666667in"}If the hosts are connected point-to-point
logically, then may have multiple intermediate devices. But the end
hosts are unaware of underlying network and see each other as if they
are connected directly.

***1.4.2 Bus Topology***\
In case of Bus topology, all devices share single communication line or
cable. Bus topology may have problem while multiple hosts sending data
at the same time. Therefore, Bus topology either uses CSMA/CD technology
or recognizes one host as Bus Master to solve the issue. It is one of
the simple forms of networking where a failure of a device does not
affect the other devices. But failure of the shared communication line
can make all other devices stop functioning.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image11.png){width="5.822222222222222in"
> height="2.6666666666666665in"}

Both ends of the shared channel have line terminator. The data is sent
in only one direction and as soon as it reaches the extreme end, the
terminator removes the data from the line.

***1.4.3 Star Topology***

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image12.png){width="0.2999989063867017in"
height="0.21724081364829395in"}![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image12.png){width="0.2999989063867017in"
height="0.21724081364829395in"}![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image13.png){width="5.916666666666667in"
height="4.746527777777778in"}

All hosts in Star topology are connected to a central device, known as
hub device, using a point-to-point connection. That is, there exists a
point to point connection between hosts and hub. The hub device can be
any of the following:\
Layer-1 device such as hub or repeater

> Layer-2 device such as switch or bridge
>
> Layer-3 device such as router or gateway

As in

Bus topology, hub acts as single point of failure. If hub fails,
connectivity of all

hosts to all other hosts fails. Every communication between hosts takes
place

through only the hub. Star topology is not expensive as to connect one
more host,

only one cable is required and configuration is simple.

***1.4.4 Ring Topology***

In ring topology, each host machine connects to exactly two other
machines,

creating a circular network structure. When one host tries to
communicate or send

message to a host which is not adjacent to it, the data travels through
all

intermediate hosts. To connect one more host in the existing structure,
the

administrator may need only one more extra cable.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image14.png){width="5.801388888888889in"
> height="3.8125in"}Failure

of any host results in failure of the whole ring. Thus, every connection
in the ring

is a point of failure. There are methods which employ one more backup
ring.

***1.4.5 Mesh Topology***

In this type of topology, a host is connected to one or multiple hosts.
This topology

has hosts in point-to-point connection with every other host or may also
have hosts

which are in point-to-point connection with few hosts only.

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image15.png){width="5.822222222222222in"
height="3.7916666666666665in"}Hosts in Mesh topology also work as relay
for other hosts which do not have direct point-to-point links. Mesh
technology comes into two types:

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image12.png){width="0.2999989063867017in"
height="0.21388779527559054in"}**Full Mesh:** All hosts have a
point-to-point connection to every other host in the network. Thus for
every new host n(n-1)/2 connections are required. It provides the most
reliable network structure among all network topologies.

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image12.png){width="0.2999989063867017in"
height="0.2152777777777778in"}**Partially Mesh:** Not all hosts have
point-to-point connection to every other host. Hosts connect to each
other in some arbitrarily fashion. This topology exists where we need to
provide reliability to some hosts out of all.

***1.4.6 Tree Topology***\
Also known as Hierarchical Topology, this is the most common form of
network topology in use presently. This topology imitates as extended
Star topology and inherits properties of Bus topology.

This topology divides the network into multiple levels/layers of
network. Mainly in

LANs, a network is bifurcated into three types of network devices. The
lowermost

is access-layer where computers are attached. The middle layer is known
as

distribution layer, which works as mediator between upper layer and
lower layer.

The highest layer is known as core layer, and is central point of the
network, i.e.

root of the tree from which all nodes fork.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image16.png){width="5.822222222222222in"
> height="3.25in"}All

neighboring hosts have point-to-point connection between them. Similar
to the Bus

topology, if the root goes down, then the entire network suffers even
though it is

not the single point of failure. Every connection serves as point of
failure, failing

of which divides the network into unreachable segment.

***1.4.7 Hybrid Topology***

A network structure whose design contains more than one topology is said
to be

hybrid topology. Hybrid topology inherits merits and demerits of all the

incorporating topologies.

![](https://api.relinklibrary.com/static/images/cse/sem3/sc/ch1/image17.png){width="5.822222222222222in"
height="4.198611111111111in"}The above picture represents an arbitrarily
hybrid topology. The combining topologies may contain attributes of
Star, Ring, Bus, and Daisy-chain topologies. Most WANs are connected by
means of Dual-Ring topology and networks connected to them are mostly
Star topology networks. Internet is the best example of largest Hybrid
topology.