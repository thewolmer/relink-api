 # CHAPTER 6  

 ## 6. Error Detection and Correction ## 
There are many reasons such as noise, cross-talk etc., which may help
data to get corrupted during transmission. The upper layers work on some
generalized view of network architecture and are not aware of actual
hardware data processing. Hence, the upper layers expect error-free
transmission between the systems. Most of the applications would not
function expectedly if they receive erroneous data. Applications such as
voice and video may not be that affected and with some errors they may
still function well.

Data-link layer uses some error control mechanism to ensure that frames
(data bit streams) are transmitted with certain level of accuracy. But
to understand how errors is controlled, it is essential to know what
types of errors may occur.

 ## 6.1 Types of Errors ## 
There may be three types of errors:

 ### 6.1.1 Single bit error ### 

> ![](https://api.relinklibrary.com/static/images/cse/sem3/dc/ch6/image47.png)

In a frame, there is only one bit, anywhere though, which is corrupt.

 ### 6.1.2 Multiple bits error ### 

> ![](https://api.relinklibrary.com/static/images/cse/sem3/dc/ch6/image48.png)

Frame is received with more than one bits in corrupted state.

 ### 6.1.3 Burst error ### 

> ![](https://api.relinklibrary.com/static/images/cse/sem3/dc/ch6/image49.png)

Frame contains more than1 consecutive bits corrupted.

Error control mechanism may involve two possible ways: •Error detection
•Error correction

 ## 6.2 Error Detection ## 
Errors in the received frames are detected by means of Parity Check and
Cyclic Redundancy Check (CRC). In both cases, few extra bits are sent
along with actual data to confirm that bits received at other end are
same as they were sent. If the counter-check at receiver end fails, the
bits are considered corrupted.

 ### 6.2.1 Parity Check ### 
One extra bit is sent along with the original bits to make number of 1s
either even in case of even parity, or odd in case of odd parity.

The sender while creating a frame counts the number of 1s in it. For
example, if even parity is used and number of 1s is even then one bit
with value 0 is added. This way number of 1s remains even. If the number
of 1s is odd, to make it even a bit with value 1 is added.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/dc/ch6/image50.png)

The receiver simply counts the number of 1s in a frame. If the count of
1s is even and even parity is used, the frame is considered to be
not-corrupted and is accepted. If the count of 1s is odd and odd parity
is used, the frame is still not corrupted.

If a single bit flips in transit, the receiver can detect it by counting
the number of 1s. But when more than one bit is erroneous, then it is
very hard for the receiver to detect the error.

 ### 6.2.2 Cyclic Redundancy Check (CRC) ### 
CRC is a different approach to detect if the received frame contains
valid data. This technique involves binary division of the data bits
being sent. The divisor is generated using polynomials. The sender
performs a division operation on the bits being sent and calculates the
remainder. Before sending the actual bits, the sender adds the remainder
at the end of the actual bits. Actual data bits plus the remainder

is called a codeword. The sender transmits data bits as codeword.

> ![](https://api.relinklibrary.com/static/images/cse/sem3/dc/ch6/image51.png)

At the other end, the receiver performs division operation on codewords
using the same CRC divisor. If the remainder contains all zeros the data
bits are accepted, otherwise it is considered as there is some data
corruption occurred in transit.

 ## 6.3 Error Correction ## 
In the digital world, error correction can be done in two ways:

 ### 6.3.1 Backward Error Correction ### 
When the receiver detects an error in the data received, it requests
back the sender to retransmit the data unit.

 ### 6.3.2 Forward Error Correction ### 
When the receiver detects some error in the data received, it executes
error-correcting code, which helps it to auto-recover and to correct
some kinds of errors. The first one, Backward Error Correction, is
simple and can only be efficiently used where retransmitting is not
expensive. For example, fiber optics. But in case

of wireless transmission retransmitting may cost too much. In the latter
case, Forward Error Correction is used.

To correct the error in data frame, the receiver must know exactly which
bit in the frame is corrupted. To locate the bit in error, redundant
bits are used as parity bits for error detection. For example, we take
ASCII words (7 bits data), then there could be 8 kind of information we
need: first seven bits to tell us which bit is in error and one more bit
to tell that there is no error.

For m data bits, r redundant bits are used. r bits can provide 2r
combinations of information. In m+r bit codeword, there is possibility
that the r bits themselves may get corrupted. So the number of r bits
used must inform about m+r bit locations plus no-error information, i.e.
m+r+1.

![](https://api.relinklibrary.com/static/images/cse/sem3/dc/ch6/image52.png)