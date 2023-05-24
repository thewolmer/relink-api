 # OPERATING SYSTEM # 

 ## Overview of operating System ## 

> An Operating System (OS) is an interface between a computer user and
> computer hardware. An operating system is a software which performs
> all the basic tasks like file management, memory management, process
> management, handling input and output, and controlling peripheral
> devices such as disk drives and printers.Some popular Operating Systems include Linux Operating System, Windows
> Operating System, VMS, OS/400, AIX, z/OS, etc.
>
>  ### 1.Definition of operating system ###
>
> An operating system is a program that acts as an interface between the
> user and the computer hardware and controls the execution of all kinds
> of programs.
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch1/image1.png)
>
> Following are some of important functions of an operating System.
>
> • Memory Management
>
> • Processor Management
>
> • Device Management
>
> • File Management
>
> • Security
>
> • Control over system performance
>
> • Job accounting
>
> • Error detecting aids
>
> • Coordination between other software and users
>
>  ### 2.Types of Operating system ###
>
> Types of operating systems which are most commonly used are as follows.


>
>
>  #### 2.1.Batch operating system #### 
>
> The users of a batch operating system do not interact with the
> computer directly. Each user prepares his job on an off-line device
> like punch cards and submits it to the computer operator. To speed up
> processing, jobs with similar needs are batched together and run as a
> group. The programmers leave their programs with the operator and the
> operator then sorts the programs with similar requirements into
> batches.
>
> The problems with Batch Systems are as follows −


 > • Lack of interaction between the user and the job.               
                                                                      
 > •CPU is often idle, because the speed of the mechanical I/O devices is slower than the        

 > • Difficult to provide the desired priority.               



>  #### 2.2Time-sharing operating systems #### 
>
> Time-sharing is a technique which enables many people, located at
> various terminals, to use a particular computer system at the same
> time. Time-sharing or multitasking is a logical extension of
> multiprogramming. Processor's time which is shared among multiple
> users simultaneously is termed as time-sharing.The main difference between Multiprogrammed Batch Systems and
> Time-Sharing Systems is that in case of Multiprogrammed batch systems,
> the objective is to maximize processor use, whereas in Time-Sharing
> Systems, the objective is to minimize response time. Multiple jobs are executed by the CPU by switching between them, but
> the switches occur so frequently. Thus, the user can receive an
> immediate response. For example, in a transaction processing, the
> processor executes each user program in a short burst or quantum ofcomputation. That is, if  ## n ##  users are present, then each user can
> get a time quantum. When the user submits the command, the response
> time is in few seconds at most. The operating system uses CPU scheduling and multiprogramming to
> provide each user with a small portion of a time. Computer systems
> that were designed primarily as batch systems have been modified to
> time-sharing systems.

>Advantages of Timesharing operating systems are as follows −


 > • Provides the advantage of quickresponse. 
 > • Avoids duplication of software.                  
 > • Reduces CPU idle time.          



> Disadvantages of Time-sharing operating systems are as follows −


 > • Problem of reliability.                                       
 > • Question of security and integrity of user programs and data. 
 > • Problem of data communication.                  



>  #### 2.3.Distributed operating System #### 
>
> Distributed systems use multiple central processors to serve multiple
> real-time applications and multiple users. Data processing jobs are
> distributed among the processors accordingly. The processors communicate with one another through various
> communication lines (such as high-speed buses or telephone lines).
> These are referred as  ## loosely coupled systems ##  or distributed
> systems. Processors in a distributed system may vary in size and
> function. These processors are referred as sites, nodes, computers,
> and so on.
>
> The advantages of distributed systems are as follows −

 > • With resource sharing facility,a user at one site may be able to use the resources available at another.
 > • Speedup the exchange of data with one another via electronic mail.                           
 > • If one site fails in a          
    > distributed system, the         
    > remaining sites can potentially 
    > continue operating.
 > • Better service to the customers.                      
 > • Reduction of the load on the    
      host computer. Reduction of     
      delays in data processing.      



>  #### 2.4.Network operating System #### 
>
> A Network Operating System runs on a server and provides the server
> the capability to manage data, users, groups, security, applications,
> and other networking functions. The primary purpose of the network
> operating system is to allow shared file and printer access among
> multiple computers in a network, typically a local area network (LAN),
> a private network or to other networks.
>
> Examples of network operating systems include Microsoft Windows Server
> 2003, Microsoft Windows Server 2008, UNIX, Linux, Mac OS X, Novell
> NetWare, and BSD.
>
> The advantages of network operating systems are as follows −


 > • Centralized servers are highly stable.                                                        
 > • Security is server managed.     
 > • Upgrades to new technologies    
      and hardware can be easily      
      integrated into the system.     
      Remote access to servers is     
      possible from different         
      locations and types of systems. 



> The disadvantages of network operating systems are as follows −


 > •High cost of buying and running a server.                       
 > • Dependency on a central         
    location for most operations.   
    Regular maintenance and updates 
    are required.                   



>  #### 2.5.Real Time operating System #### 
>
> A real-time system is defined as a data processing system in which the
> time interval required to process and respond to inputs is so small
> that it controls the environment. The time taken by the system to
> respond to an input and display of required updated information is
> termed as the  ## response time ## . So in this method, the response time
> is very less as compared to online processing.
>
> Real-time systems are used when there are rigid time requirements on
> the operation of a processor or the flow of data and real-time systems
> can be used as a control device in a dedicated application. A
> real-time operating system must have well-defined, fixed time
> constraints, otherwise the system will fail. For example, Scientific
> experiments, medical imaging systems, industrial control systems,
> weapon systems, robots, air traffic control systems, etc.
>
> There are two types of real-time operating systems.
>
>  ##### 2.5.1.Hard real-time systems #####
>
> Hard real-time systems guarantee that critical tasks complete on time.
> In hard real-time systems, secondary storage is limited or missing and
> the data is stored in ROM. In these systems, virtual memory is almost
> never found.
>
>  ##### 2.5.2.Soft real-time systems ##### 
>
> Soft real-time systems are less restrictive. A critical real-time task
> gets priority over other tasks and retains the priority until it
> completes. Soft real-time systems have limited utility than hard
> real-time systems. For example, multimedia, virtual reality, Advanced
> Scientific Projects like undersea exploration and planetary rovers,
> etc.
>
>  ### 3.Operating system Services ### 
>
> An Operating System provides services to both the users and to the
> programs.
>
> • It provides programs an environment to execute.
>
> • It provides users the services to execute the programs in a
> convenient manner.
>
> Following are a few common services provided by an operating system −
>
> • Program execution
>
> • I/O operations
>
> • File System manipulation
>
> • Communication
>
> • Error Detection
>
> • Resource Allocation
>
> • Protection
>
>  #### 3.1.Program execution #### 
>
> Operating systems handle many kinds of activities from user programs
> to system programs like printer spooler, name servers, file server,
> etc. Each of these activities is encapsulated as a process.
>
> A process includes the complete execution context (code to execute,
> data to manipulate, registers, OS resources in use). Following are the
> major activities of an operating system with respect to program
> management −
>
> • Loads a program into memory.
>
> • Executes the program.
>
> • Handles program's execution.
>
> • Provides a mechanism for process synchronization.
>
> • Provides a mechanism for process communication.
>
> • Provides a mechanism for deadlock handling.

 #### 3.2.I/O Operation #### 

> An I/O subsystem comprises of I/O devices and their corresponding
> driver software. Drivers hide the peculiarities of specific hardware
> devices from the users.
>
> An Operating System manages the communication between user and device
> drivers.
>
> • I/O operation means read or write operation with any file or any
> specific I/O device.
>
> • Operating system provides the access to the required I/O device when
> required.

 #### 3.3.File system manipulation #### 

> A file represents a collection of related information. Computers can
> store files on the disk (secondary storage), for long-term storage
> purpose. Examples of storage media include magnetic tape, magnetic
> disk and optical disk drives like CD, DVD. Each of these media has its
> own properties like speed, capacity, data transfer rate and data
> access methods.
>
> A file system is normally organized into directories for easy
> navigation and usage. These directories may contain files and other
> directions. Following are the major activities of an operating system
> with respect to file management −
>
> • Program needs to read a file or write a file.
>
> • The operating system gives the permission to the program for
> operation on file.
>
> • Permission varies from read-only, read-write, denied and so on.
>
> • Operating System provides an interface to the user to create/delete
> files.
>
> • Operating System provides an interface to the user to create/delete
> directories.
>
> • Operating System provides an interface to create the backup of file
> system.

 #### 3.4.Communication #### 

> In case of distributed systems which are a collection of processors
> that do not share memory, peripheral devices, or a clock, the
> operating system manages communications between all the processes.
> Multiple processes communicate with one another through communication
> lines in the network.
>
> The OS handles routing and connection strategies, and the problems of
> contention and security. Following are the major activities of an
> operating system with respect to communication −
>
> • Two processes often require data to be transferred between them
>
> • Both the processes can be on one computer or on different computers,
> but are connected through a computer network.
>
> • Communication may be implemented by two methods, either by Shared
> Memory or by Message Passing.

 #### 3.5.Error handling #### 

> Errors can occur anytime and anywhere. An error may occur in CPU, in
> I/O devices or in the memory hardware. Following are the major
> activities of an operating system with respect to error handling −
>
> • The OS constantly checks for possible errors.
>
> • The OS takes an appropriate action to ensure correct and consistent
> computing.

 #### 3.6.Resource Management #### 

> In case of multi-user or multi-tasking environment, resources such as
> main memory, CPU cycles and files storage are to be allocated to each
> user or job. Following are the major activities of an operating system
> with respect to resource management −
>
> • The OS manages all kinds of resources using schedulers.
>
> • CPU scheduling algorithms are used for better utilization of CPU.

 #### 3.7.Protection #### 

> Considering a computer system having multiple users and concurrent
> execution of multiple processes, the various processes must be
> protected from each other's activities.
>
> Protection refers to a mechanism or a way to control the access of
> programs, processes, or users to the resources defined by a computer
> system. Following are the major activities of an operating system with
> respect to protection −
>
> • The OS ensures that all access to system resources is controlled.
>
> • The OS ensures that external I/O devices are protected from invalid
> access attempts.
>
> • The OS provides authentication features for each user by means of
> passwords.
>
>  ### 4.User Operating System Interface ###
>
>  #### 4.1.User Operating System Interface -CLI #### 

Command Line Interface (CLI) or command interpreter allows direct
command entry sometimes implemented in kernel, sometimes by systems program sometimes multiple
flavors implemented shells primarily fetches a command from user and executes it.
Sometimes commands built-in,sometimes just names of programs
>
>  #### 4.2.User Operating System Interface -GUI #### 
>
> User-friendly desktop metaphor interface usually mouse, keyboard, and
> monitor icons represent files, programs, actions, etc various mouse buttons over objects in
> the interface cause various actions (provide information, options, execute function, open
> directory) (known as a folder)invented at Xerox PARC Many systems now include both CLI and GUI interfaces Microsoft Windows is GUI with CLI ―command‖ shell 
> Apple Mac OS X as ―Aqua‖ GUI interface with UNIX kernel underneath and shells available Solaris is CLI with optional GUI interfaces (Java Desktop, KDE)
>
>  ### 5.System Calls ### 
>
> In computing, a  ## system call ##  is the programmatic way in which a computer program requests a service from the kernel of the operating system it is executed on. A system call is a way for programs to interact with the operating system. A computer program makes a system call when it makes a request to the operating system's kernel.System call  ## provides ##  the services of the operating system to the user programs via Application Program Interface(API). It provides an interface between a process and operating system to allow user-level processes to request services of the operating system. System calls are the only entry points into the kernel system. All programs needing resources must use system calls.

> Services Provided by System Calls :
> 1.Process creation and management
> 2.Main memory management
> 3.File Access, Directory and File system management
> 4.Device handling(I/O)
> 5.Protection
> 6.Networking,etc.
>
>  #### 5.1.Types of System Calls : #### 
> There are 5 different categories of system calls --
>
> 1.Process control: end, abort, create, terminate, allocate and free memory. 
> 2.File management: create, open, close, delete, read file etc.
> 3.Device management
> 4.Information maintenance
> 5.Communication
> Examples of Windows and Unix System Calls --


                        > WINDOWS                     > UNIX              

 > Process Control     
                        
                        > CreateProcess()             > fork()              

                        > ExitProcess()               > exit()              

                        > WaitForSingleObject()       > wait()              
                                                

 > File Manipulation    
                        
                        > CreateFile()                > open()              

                        > ReadFile()                  > read()              

                        > WriteFile()                 > write()             

                        > CloseHandle()               > close()             

 > Device Manipulation 
                       
                        > SetConsoleMode()            > ioctl()             

                        > ReadConsole()               > read()              

                        > WriteConsole()              > write()             

 > Information 

   Maintenance      
                        
                        > GetCurrentProcessID()       > getpid()                                              
    
                        > SetTimer()                  > alarm()             

                        > Sleep()                     > sleep()             

 > Communication        
                        
                        > CreatePipe()                > pipe()              

                        > CreateFileMapping()         > shmget()              

                        > MapViewOfFile()             > mmap()                

 > Protection          
                        
                        > SetFileSecurity()           > InitlializeSecurityDescriptor() 



>  ### 6.Operating System structure ### 
>  #### 6.1Simple Structure #### 

![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch1/image2.png)

> In MS-DOS, applications may bypass the operating system


 •    Operating systems such as       
      MS-DOS and the original UNIX    
 •    did not have well-defined       
      structures.There was no(user and kernel),  
      and so errors in applications   
      could cause the whole system to 
      crash.                          



>  #### 6.2Monolithic approach #### 


 •    Functionality of the OS is      
      invoked with simple function    
 •    calls within the kernel, which  
      is one large program.Device drivers are loaded into  
      the running kernel and become part of the kernel.             



![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch1/image3.png)

> A monolithic kernel, such as Linux and other Unix systems.
>
>  #### 6.3.Layered Approach #### 
> This approach breaks up the operating system into different layers.This allows implementers to change the inner workings,and increases modularity. As long as the external interface of the routines don't change,developers have more freedom to change the inner workings of the routines.With the layered approach, the bottom layer is the hardware,while the highest layer is the user interface.The main advantage is simplicity of construction and debugging.The main  #### difficulty ####  is defining the various layers The main  #### disadvantage ####  is that the OS tends to be less efficient than other implementations.            


![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch1/image4.png)

> The Microsoft Windows NT Operating System. The lowest level is a
> monolithic kernel, but
>
> many OS components are at a higher level, but still part of the OS.
>
>  ### 7.Virtual machine ### 
>
> A virtual machine (VM) is a software program or operating system that
> not only exhibits the behavior of a separate computer, but is also
> capable of performing tasks such as running applications and programs
> like a separate computer. A virtual machine, usually known as a guest
> is created within another computing environment referred as a
> "host." Multiple virtual machines can exist within a single host at
> one time.
>
> A virtual machine is also known as a guest.
>
> Virtual machines are becoming more common with the evolution of
> virtualization technology. Virtual machines are often created to
> perform certain tasks that are different than tasks performed in a
> host environment.
>
> Virtual machines are implemented by software emulation methods or
> hardware virtualization techniques. Depending on their use and level
> of correspondence to any physical computer, virtual machines can be
> divided into two categories:
>
>  #### 7.1.System Virtual Machines ####  
> A system platform that supports the sharing of the host computer's physical resources between multiple
> virtual machines, each running with its own copy of the operating
> system. The virtualization technique is provided by a software
>
> layer known as a hypervisor, which can run either on bare hardware or
> on top of an operating system.
>
>  #### 7.2.Process Virtual Machine ####  
> Designed to provide a platform-independent programming environment that masks the
> information of the underlying hardware or operating system and allows
> program execution to take place in the same way on any given platform.
>
> #### Some of the advantages of a virtual machine include ####
Allows multiple operating system environments on a single physical computer without any intervention Virtual machines are widely
available and are easy to manage and maintain.Offers application provisioning and disaster recovery options



> #### Some of the drawbacks of virtual machines include ####
They are not as efficient as a physical computer because the hardware resources are distributed in an indirect way. Multiple VMs running on a single physical machine can deliver unstable performance   