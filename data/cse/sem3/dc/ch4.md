**CHAPTER 4**

**4. MULTIPLEXING**

Multiplexing is a technique by which different analog and digital
streams of transmission can be simultaneously processed over a shared
link. Multiplexing divides the high capacity medium into low capacity
logical medium which is then shared by different streams.

Communication is possible over the air (radio frequency), using a
physical media (cable), and light (optical fiber). All mediums are
capable of multiplexing.

When multiple senders try to send over a single medium, a device called
Multiplexer divides the physical channel and allocates one to each. On
the other end of communication, a De-multiplexer receives data from a
single medium, identifies each, and sends to different receivers.

**4.1 Frequency Division Multiplexing**\
When the carrier is frequency, FDM is used. FDM is an analog technology.
FDM divides the spectrum or carrier bandwidth in logical channels and
allocates one user to each channel. Each user can use the channel
frequency independently and has exclusive access of it. All channels are
divided in such a way that they do not overlap with each other. Channels
are separated by guard bands. Guard band is a

+--------+--------+--------+--------+--------+--------+--------+--------+
| fre    | which  | is     | not    | used   | by     | either | > ch   |
| quency |        |        |        |        |        |        | annel. |
+========+========+========+========+========+========+========+========+
+--------+--------+--------+--------+--------+--------+--------+--------+

> ![](image36.png){width="5.854166666666667in"
> height="2.3444444444444446in"}

**4.2 Time Division Multiplexing**\
TDM is applied primarily on digital signals but can be applied on analog
signals as well. In TDM the shared channel is divided among its user by
means of time slot. Each user can transmit data within the provided time
slot only. Digital signals are divided in frames, equivalent to time
slot i.e. frame of an optimal size which can be transmitted in given
time slot. TDM works in synchronized mode. Both ends, i.e. Multiplexer
and De-multiplexer are timely synchronized, and both switch to next
channel simultaneously.

> ![](image37.png){width="5.572222222222222in"
> height="2.2083333333333335in"}

When channel A transmits its frame at one end, the De-multiplexer
provides media to channel A on the other end. As soon as the channel A's
time slot expires, this

side switches to channel B. On the other end, the De-multiplexer works
in a

synchronized manner and provides media to channel B. Signals from
different

channels travel the path in interleaved manner.

**4.3 Wavelength Division Multiplexing**

Light has different wavelength (colors). In fiber optic mode, multiple
optical

carrier signals are multiplexed into an optical fiber by using different
wavelengths.

This is an analog multiplexing technique and is done conceptually in the
same

manner as FDM but uses light as signals.

> ![](image38.png){width="5.156944444444444in"
> height="2.2180555555555554in"}