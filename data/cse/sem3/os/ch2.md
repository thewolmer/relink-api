> # Process Management #
>
> ## 1.Process ##
>
> A process is basically a program in execution. The execution of a
> process must progress in a sequential fashion.A process is defined as
> an entity which represents the basic unit of work to be implemented in
> the system.To put it in simple terms, we write our computer programs in a text
> file and when we execute this program, it becomes a process which
> performs all the tasks mentioned in the program. When a program is loaded into the memory and it becomes a process, it can be divided into four sections
  stack, heap, text and data.

> The following image shows a simplified layout of a process inside main memory −
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image5.png)


 **S.N.**                           **Component & Description**       

 > 1                                

                                    > **Stack**                      
                                    > The process Stack contains the  
                                    > temporary data such as          
                                    > method/function parameters,     
                                    > return address and local        
                                    > variables.                      

 > 2                                

                                    > **Heap**                       
                                    > This is dynamically allocated   
                                    > memory to a process during its  
                                    > run time.                       

 > 3                                
                                   
                                    > **Text**                       
                                    > This includes the current       
                                    > activity represented by the     
                                    > value of Program Counter and    
                                    > the contents of the             
                                    > processor's registers.         

 > 4                                
 
                                    > **Data**                       
                                    > This section contains the       
                                    > global and static variables.    


> ### 2.Program ###
>
> A program is a piece of code which may be a single line or millions of
> lines. A computer program is usually written by a computer programmer
> in a programming language. For example, here is a simple program
> written in C programming language −


 > #include<stdio.h>                                                                                                       
 > int main()
 > {                                                      
 > printf("Hello, World! n");                                
 > return0;                                                           
 > }                                                                   



> A computer program is a collection of instructions that performs a
> specific task when executed by a computer. When we compare a program
> with a process, we can conclude that a process is a dynamic instance
> of a computer program.
>
> A part of a computer program that performs a well-defined task is
> known as an **algorithm**. A collection of computer programs,
> libraries and related data are referred to as a **software**.
>
> ### 3.Process Life Cycle ###
>
> When a process executes, it passes through different states. These
> stages may differ in different operating systems, and the names of
> these states are also not standardized.
>
> In general, a process can have one of the following five states at a
> time.


 ***S.N.***                           ***State & Description***          

 > 1                                > ***Start***                      
                                    > This is the initial state when  
                                    > a process is first              
                                    > started/created.                

 > 2                                > ***Ready***                      
                                    >                                 
                                    > The process is waiting to be    
                                    > assigned to a processor. Ready  
                                    > processes are waiting to have   
                                    > the processor allocated to them 
                                    > by the operating system so that 
                                    > they can run. Process may come  
                                    > into this state after **Start** 
                                    > state or while running it by    
                                    > but interrupted by the          
                                    > scheduler to assign CPU to some 
                                    > other process.                  



 > 3                                > ***Running***                    
                                    > Once the process has been       
                                    > assigned to a processor by the  
                                    > OS scheduler, the process state 
                                    > is set to running and the       
                                    > processor executes its          
                                    > instructions.                   

 > 4                                > ***Waiting***                    
                                    > Process moves into the waiting  
                                    > state if it needs to wait for a 
                                    > resource, such as waiting for   
                                    > user input, or waiting for a    
                                    > file to become available.       

 > 5                                > ***Terminated or Exit***        
                                    > Once the process finishes its   
                                    > execution, or it is terminated  
                                    > by the operating system, it is  
                                    > moved to the terminated state   
                                    > where it waits to be removed    
                                    > from main memory.               


> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image6.png){width="6.25in"
> height="2.0944444444444446in"}
>
> ### 4.Process Control Block (PCB) ###
>
> A Process Control Block is a data structure maintained by the
> Operating System for every process. The PCB is identified by an
> integer process ID (PID). A PCB keeps all the information needed to
> keep track of a process as listed below in the table −


 **S.N.**                           **Information & Description**     

 > 1                                > **Process State**             
                                    > The current state of the        
                                    > process i.e., whether it is     
                                    > ready, running, waiting, or     
                                    > whatever.                       



 > 2                                > **Process privileges**         
                                    > This is required to             
                                    > allow/disallow access to system 
                                    > resources.                      

 > 3                                > **Process ID**                 
                                    > Unique identification for each  
                                    > of the process in the operating 
                                    > system.                         

 > 4                                > **Pointer**                   
                                    > A pointer to parent process.    

 > 5                                > **Program Counter**            
                                    > Program Counter is a pointer to 
                                    > the address of the next         
                                    > instruction to be executed for  
                                    > this process.                   

 > 6                                > **CPU registers**              
                                    > Various CPU registers where     
                                    > process need to be stored for   
                                    > execution for running state.    

 > 7                                > **CPU Scheduling Information** 
                                    > Process priority and other      
                                    > scheduling information which is 
                                    > required to schedule the        
                                    > process.                        

 > 8                                > **Memory management**            
                                    > information**                  
                                    > This includes the information   
                                    > of page table, memory limits,   
                                    > Segment table depending on      
                                    > memory used by the operating    
                                    > system.                         

 > 9                                > **Accounting information**     
                                    > This includes the amount of CPU 
                                    > used for process execution,     
                                    > time limits, execution ID etc.  

 > 10                               > **IO status information**       
                                    > This includes a list of I/O     
                                    > devices allocated to the        
                                    > process.                       


> The architecture of a PCB is completely dependent on Operating System and may contain different information in different operating systems.Here is a  simplified diagram of a PCB −
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image7.png)
>
> The PCB is maintained for a process throughout its lifetime, and is
> deleted once the process terminates.
>
> ### 5.Messaging Passing ###
>
> The process scheduling is the activity of the process manager that
> handles the removal of the running process from the CPU and the
> selection of another process on the basis of a particular strategy.
>
> Process scheduling is an essential part of a Multiprogramming
> operating systems. Such operating systems allow more than one process
> to be loaded into the executable memory at a time and the loaded
> process shares the CPU using time multiplexing.
> 
> Process communication is the mechanism provided by the operating system
> that allows processes to communicate with each other. This communication could involve a
> process letting another process know that some event has occurred or transferring of data from
> one process to another. One of the models of process communication is
> the message passing model.
>
> Message passing model allows multiple processes to read and write data
> to the message queue without being connected to each other. Messages
> are stored on the queue until their recipient retrieves them. Message
> queues are quite useful for interprocess communication and are used by
> most operating systems.
>
> A diagram that demonstrates message passing model of process
> communication is given as follows:
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image8.png){width="6.343055555555556in"
> height="3.8958333333333335in"}
>
> In the above diagram, both the processes P1 and P2 can access the
> message queue and store and retrieve data.
>
> #### 5.1.Advantages of message passing ####
>
> Some of the advantages of message passing model are given as follows:
>
> 1.The message passing model is much easier to implement than the
> shared memory model.
>
> 2.It is easier to build parallel hardware using message passing model
> as it is quite tolerant of higher communication latencies.
>
>  #### 5.2.Disadvantages of messaging passing model ####
>
> The message passing model has slower communication than the shared
> memory model because the connection setup takes time.
>
> ### 6.CPU Scheduling ###
>
> CPU scheduling is a process which allows one process to use the CPU
> while the execution of another process is on hold(in waiting state)
> due to unavailability of any resource like I/O etc, thereby making
> full use of CPU. The aim of CPU scheduling is to make the system
> efficient, fast and fair.
>
> Whenever the CPU becomes idle, the operating system must select one of
> the processes in the ready queue to be executed. The selection
> process is carried out by the short-term scheduler (or CPU scheduler).
> The scheduler selects from among the processes in memory that are
> ready to execute, and allocates the CPU to one of them.
>
> #### 6.1.CPU Scheduling: Dispatcher ####
>
> Another component involved in the CPU scheduling function is the
> Dispatcher. The dispatcher is the module that gives control of the
> CPU to the process selected by the short-term scheduler.
>
> This function involves:


 > Switching context             
 > Switching to user mode      
 > Jumping to the proper location in the user program to restart that program from where it left last time.
>
> The dispatcher should be as fast as possible, given that it is invoked
> during every process switch. The time taken by the dispatcher to stop
> one process and start another process is known as the Dispatch
> Latency. Dispatch Latency can be explained using the below figure:
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image9.png)

> #### 6.2.Types of CPU Scheduling ####
>
> CPU scheduling decisions may take place under the following four
> circumstances:
>
> 1.When a process switches from the running state to the
> waiting state(for I/O request or invocation of wait for the
> termination of one of the child processes).
>
> 2.When a process switches from the **running** state to the **ready**
> state (for example, when an interrupt occurs).
>
> 3.When a process switches from the **waiting** state to the **ready**
> state(for example, completion of I/O).
>
> 4.When a process **terminates**.
>
> In circumstances 1 and 4, there is no choice in terms of scheduling. A
> new process(if one exists in the ready queue) must be selected for
> execution. There is a choice, however in circumstances 2 and 3.
>
> When Scheduling takes place only under circumstances 1 and 4, we say
> the scheduling scheme is **non-preemptive**; otherwise the scheduling
> scheme is **preemptive**.
>
> #### 6.2.1.Non-Preemptive Scheduling #### 
>
> Under non-preemptive scheduling, once the CPU has been allocated to a
> process, the process keeps the CPU until it releases the CPU either by
> terminating or by switching to the waiting state.
>
> This scheduling method is used by the Microsoft Windows 3.1 and by the
> Apple Macintosh operating systems.
>
> It is the only method that can be used on certain hardware platforms,
> because It does not require the special hardware(for example: a timer)
> needed for preemptive scheduling.
>
> #### 6.2.2.Preemptive Scheduling #### 
>
> In this type of Scheduling, the tasks are usually assigned with
> priorities. At times it is necessary to run a certain task that has a
> higher priority before another task although it is running. Therefore,
> the running task is interrupted for some time and resumed later when
> the priority task has finished its execution.
>
> ### 7.CPU Scheduling: Scheduling Criteria ###
>
> There are many different criterias to check when considering the
> **"best"** scheduling algorithm, they are:
>
> #### 7.1.CPU Utilization #### 
>
> To make out the best use of CPU and not to waste any CPU cycle, CPU
> would be working most of the time(Ideally 100% of the time).
> Considering a real system, CPU usage should range from 40% (lightly
> loaded) to 90% (heavily loaded.)
>
> ####  7.2.Throughput #### 
>
> It is the total number of processes completed per unit time or rather
> say total amount of work done in a unit of time. This may range from
> 10/second to 1/hour depending on the specific processes.
>
> #### 7.3.Turnaround Time #### 
>
> It is the amount of time taken to execute a particular process, i.e.
> The interval from time of submission of the process to the time of
> completion of the process(Wall clock time).
>
> #### 7.4.Waiting Time #### 
> The sum of the periods spent waiting in the ready queue amount of time
> a process has been waiting in the ready queue to acquire get control
> on the CPU.
>
> #### 7.5.Load Average #### 
> It is the average number of processes residing in the ready queue
> waiting for their turn to get into the CPU.
>
> #### 7.6.Response Time #### 
> Amount of time it takes from when a request was submitted until the
> first response is produced. Remember, it is the time till the first
> response and not the completion of process execution(final response).
>
> In general CPU utilization and Throughput are maximized and other
> factors are reduced for proper optimization.
>
> ### 8.Process Scheduling Queues ####  
> The OS maintains all PCBs in Process Scheduling Queues. The OS
> maintains a separate queue for each of the process states and PCBs of
> all processes in the same execution state are placed in the same
> queue. When the state of a process is changed, its PCB is unlinked
> from its current queue and moved to its new state queue.
>
> The Operating System maintains the following important process
> scheduling queues − 
> •**Job queue** − This queue keeps all the processes in the system.
>
> •**Ready queue** − This queue keeps a set of all processes residing in
> main memory, ready and waiting to execute. A new process is always put
> in this queue.
>
> •**Device queues** − The processes which are blocked due to
> unavailability of an I/O device constitute this queue.
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image10.png)
>
> The OS can use different policies to manage each queue (FIFO, Round
> Robin, Priority, etc.). The OS scheduler determines how to move
> processes between the ready and run queues which can only have one
> entry per processor core on the system; in the above diagram, it has
> been merged with the CPU.
>
> #### 8.1.Two-State Process Model #### 

Two-state process model refers to running and non-running states which
are described below −


 **S.N.**                           **State & Description**           

>1                                   > **Running** 
                                    >
                                    > When a new process is created,  
                                    > it enters into the system as in 
                                    > the running state.              

 > 2                                > **Not Running**                 
                                    >                                 
                                    > Processes that are not running  
                                    > are kept in queue, waiting for  
                                    > their turn to execute. Each     
                                    > entry in the queue is a pointer 
                                    > to a particular process. Queue  
                                    > is implemented by using linked  
                                    > list. Use of dispatcher is as   
                                    > follows. When a process is      
                                    > interrupted, that process is    
                                    > transferred in the waiting      
                                    > queue. If the process has       
                                    > completed or aborted, the       
                                    > process is discarded. In either 
                                    > case, the dispatcher then       
                                    > selects a process from the      
                                    > queue to execute.               


> ### 9.Schedulers ### 
>
> Schedulers are special system software which handle process scheduling
> in various ways. Their main task is to select the jobs to be submitted
> into the system and to decide which process to run. Schedulers are of
> three types −


 > •  Long-Term Scheduler            
 > •  Short-Term Scheduler           
 > •  Medium-Term Scheduler           


> #### 9.1.Long Term Scheduler #### 
>
> It is also called a **job scheduler**. A long-term scheduler
> determines which programs are admitted to the system for processing.
> It selects processes from the queue and loads them into memory for
> execution. Process loads into the memory for CPU scheduling.
>
> The primary objective of the job scheduler is to provide a balanced
> mix of jobs, such as I/O bound and processor bound. It also controls
> the degree of multiprogramming. If the degree of multiprogramming is
> stable, then the average rate of process creation must be equal to the
> average departure rate of processes leaving the system.
>
> On some systems, the long-term scheduler may not be available or
> minimal. Time-sharing operating systems have no long term scheduler.
> When a process changes the state from new to ready, then there is use
> of long-term scheduler.
>
> #### 9.2.Short Term Scheduler #### 
>
> It is also called as **CPU scheduler**. Its main objective is to
> increase system performance in accordance with the chosen set of
> criteria. It is the change of ready state to running state of the
> process. CPU scheduler selects a process among the processes that are
> ready to execute and allocates CPU to one of them.
>
> Short-term schedulers, also known as dispatchers, make the decision of
> which process to execute next. Short-term schedulers are faster than
> long-term schedulers.
>
> #### 9.3.Medium Term Scheduler #### 
>
> Medium-term scheduling is a part of **swapping**. It removes the
> processes from the memory. It reduces the degree of multiprogramming.
> The medium-term scheduler is in-charge of handling the swapped
> out-processes.
>
> A running process may become suspended if it makes an I/O request. A
> suspended processes cannot make any progress towards completion. In
> this condition, to remove the process from memory and make space for
> other processes, the suspended process is moved to the secondary
>
> storage. This process is called **swapping**, and the process is said
> to be swapped out or rolled out. Swapping may be necessary to improve
> the process mix.
>
> Comparison among Scheduler


 **S.N.**         **Long-Term          **Short-Term     **Medium-Term   
                  Scheduler**            Scheduler**      Scheduler**     

 > 1              > It is a job          > It is a CPU    > It is a       
                  > scheduler            > scheduler      > process       
                                                          > swapping      
                                                          > scheduler.    

 > 2              > Speed is            > Speed is        > Speed is in   
                  > lesser than         > fastest among   > between both  
                  > short term          > other two       > short and     
                  > scheduler                             > long term    
                                                          > scheduler.    

 > 3              > It controls         > It provides     > It reduces    
                  > the degree of       > lesser          > the degree of 
                  > multiprogramming    > control over    > multiprogramming         
                  > degree of           > multiprogramming
                                                                 
                                                   

 > 4              > It is almost        > It is also     > It is a part  
                  > absent or           > minimal in     > of Time       
                  > minimal in          > time sharing   > sharing       
                  > time sharing        > system         > systems.      
                  > system                                          

 > 5              > It selects          > It selects     > It can        
                  > processes           > those          > re-introduce  
                  > from pool and       > processes      > the          
                  > loads them          > which are      > process into  
                  > into memory         > ready to       > memory and    
                  > for execution       > execute        > execution can 
                                                         > be           
                                                         > continued.    


> ## 10.Context Switching ##
>
> A context switch is the mechanism to store and restore the state or
> context of a CPU in Process Control block so that a process execution
> can be resumed from the same point at a later time. Using this
> technique, a context switcher enables multiple processes to share a
> single CPU. Context switching is an essential part of a multitasking
> operating system features.
>
> When the scheduler switches the CPU from executing one process to
> execute another, the state from the current running process is stored
> into the process control block. After this, the state for the process
> to run next is loaded from its own PCB and used to set the PC,
> registers, etc. At that point, the second process can start executing.
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image11.png)
>
> Context switches are computationally intensive since register and
> memory state must be saved and restored. To avoid the amount of
> context switching time, some hardware systems employ two or more sets
> of processor registers. When the process is switched, the following
> information is stored for later use.


 > •> Program Counter                
 > •> Scheduling information         
 > •> Base and limit register value  
 > •> Currently used register        
 > •> Changed State                   
 > •> I/O State information          
 > •> Accounting information          



> ### 10.1.Interprocess Communication ###
>
> Interprocess communication (IPC) is a set of pming s that allow a
> programmer to coordinate activities among different program es th
> concurrently in an operating system. This allows a program to handle
> manyquests at the same time. Since even a single user request may
> result in multiple processes running in the operating system on the
> user's behalf, the processes need to communicate with each other. The
> IPC interfaces make this possible. Each IPC method has its own
> advantages and limitations so it is not unusual for a single program
> to use all of the IPC methods.
>
> ## 11.Shared Memory System ##
>
> Shared memory is a memory shared between two or more processes.
> However, why do we need to share memory or some other means of
> communication?
>
> To reiterate, each process has its own address space, if any process
> wants to communicate with some information from its own address space
> to other processes, then it is only possible with IPC (inter process
> communication) techniques. As we are already aware, communication can
> be between related or unrelated processes.
>
> Usually, inter-related process communication is performed using Pipes
> or Named Pipes. Unrelated processes (say one process running in one
> terminal and another process in another terminal) communication can be
> performed using Named Pipes or through popular IPC techniques of
> Shared Memory and Message Queues.
>
> We have seen the IPC techniques of Pipes and Named pipes and now it is
> time to know the remaining IPC techniques viz., Shared Memory, Message
> Queues, Semaphores, Signals, and Memory Mapping.
>
> In this chapter, we will know all about shared memory.
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image12.png)
>
> We know that to communicate between two or more processes, we use
> shared memory but before using the shared memory what needs to be done
> with the system calls, let us see this −
>
> •Create the shared memory segment or use an already created shared
> memory segment (shmget())
>
> •Attach the process to the already created shared memory segment
> (shmat())
>
> •Detach the process from the already attached shared memory segment
> (shmdt())
>
> •Control operations on the shared memory segment (shmctl())
>
> ## 12.Scheduling Algorithm ##
>
> A Process Scheduler schedules different processes to be assigned to
> the CPU based on particular scheduling algorithms. There are six
> popular process scheduling algorithms which we are going to discuss in
> this chapter −
>
> • First-Come, First-Served (FCFS) Scheduling
>
> • Shortest-Job-Next (SJN) Scheduling
>
> • Priority Scheduling
>
> • Shortest Remaining Time
>
> • Round Robin(RR) Scheduling
>
> • Multiple-Level Queues Scheduling
>
> These algorithms are either **non-preemptive or preemptive**.
> Non-preemptive algorithms are designed so that once a process enters
> the running state, it cannot be preempted until it completes its
> allotted time, whereas the preemptive scheduling is based on priority
> where a scheduler may preempt a low priority running process anytime
> when a high priority process enters into a ready state.
>
> ### 12.1.First Come First Serve (FCFS) ### 
>
> • Jobs are executed on first come, first serve basis.
>
> • It is a non-preemptive, pre-emptive scheduling algorithm.
>
> • Easy to understand and implement.
>
> • Its implementation is based on FIFO queue.
>
> • Poor in performance as average wait time is high.
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image13.png)
> **Wait time** of each process is as follows −


 > **Process**                      **Wait Time : Service Time - Arrival Time**                    

 P0                                 0 - 0 = 0                         

 P1                                 5 - 1 = 4                         

 P2                                 8 - 2 = 6                         

 P3                                 16 - 3 = 13                       


> Average Wait Time: (0+4+6+13) / 4 = 5.75

>
> ### 12.2.Shortest Job Next (SJN) ### 


> •This is also known as **shortest job first**, or SJF
> •This is a non-preemptive, pre-emptive scheduling algorithm.
> •Best approach to minimize waiting time.
> •Easy to implement in Batch systems where required CPU time is known
>  in advance. 
> •Impossible to implement in interactive systems where
>  required CPU time is not known. 
> •The processer should know in advance
>  how much time process will take.
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image14.png)
> **Wait time** of each process is as follows −

  -----------------------------------------------------------------------
  **Process**                         **Wait Time : Service Time -
                                      Arrival Time**
  ----------------------------------- -----------------------------------
  P0                                  3 - 0 = 3

  P1                                  0 - 0 = 0

  P2                                  16 - 2 = 14

  P3                                  8 - 3 = 5
  -----------------------------------------------------------------------

> Average Wait Time: (3+0+14+5) / 4 = 5.50
>
> *12.3.Priority Based Scheduling*
>
> •Priority scheduling is a non-preemptive algorithm and one of the most
> common scheduling algorithms in batch systems.
>
> •Each process is assigned a priority. Process with highest priority is
> to be executed first and so on.
>
> •Processes with same priority are executed on first come first served
> basis.
>
> •Priority can be decided based on memory requirements, time
> requirements or any other resource requirement.
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image15.png)


> **Wait time** of each process is as follows −

  -----------------------------------------------------------------------
  **Process**                         **Wait Time : Service Time -
                                      Arrival Time**
  ----------------------------------- -----------------------------------
  P0                                  9 - 0 = 9

  P1                                  6 - 1 = 5

  P2                                  14 - 2 = 12

  P3                                  0 - 0 = 0
  -----------------------------------------------------------------------

> Average Wait Time: (9+5+12+0) / 4 = 6.5
>
> ### 12.4.Shortest Remaining Time ### 
>
> •Shortest remaining time (SRT) is the preemptive version of the SJN
> algorithm.
>
> •The processor is allocated to the job closest to completion but it
> can be preempted by a newer ready job with shorter time to completion.
>
> •Impossible to implement in interactive systems where required CPU
> time is not known.
>
> •It is often used in batch environments where short jobs need to give
> preference.
>
> ### 12.5.Round Robin Scheduling ### 
>
> •Round Robin is the preemptive process scheduling algorithm.
>
> •Each process is provided a fix time to execute, it is called a
> **quantum**.
>
> •Once a process is executed for a given time period, it is preempted
> and other process executes for a given time period.
>
> •Context switching is used to save states of preempted processes.
>
> ![](https://api.relinklibarary.com/static/images/cse/sem3/os/ch2/image16.png)
>
> **Wait time** of each process is as follows −

  -----------------------------------------------------------------------
  **Process**                         **Wait Time : Service Time -
                                      Arrival Time**
  ----------------------------------- -----------------------------------
  P0                                  (0 - 0) + (12 - 3) = 9

  P1                                  (3 - 1) = 2

  P2                                  (6 - 2) + (14 - 9) + (20 - 17) = 12

  P3                                  (9 - 3) + (17 - 12) = 11
  -----------------------------------------------------------------------

> Average Wait Time: (9+2+12+11) / 4 = 8.5
>
> ### 12.6.Multiple-Level Queues Scheduling ### 
>
> Multiple-level queues are not an independent scheduling algorithm.
> They make use of other existing algorithms to group and schedule jobs
> with common characteristics.
>
> • Multiple queues are maintained for processes with common
> characteristics.
>
> • Each queue can have its own scheduling algorithms.
>
> • Priorities are assigned to each queue.

For example, CPU-bound jobs can be scheduled in one queue and all
I/O-bound jobs in another queue. The Process Scheduler then alternately selects jobs from each
queue and assigns them to the CPU based on the algorithm assigned to the queue.