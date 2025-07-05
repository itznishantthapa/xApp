
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Test() {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
          
                <SafeAreaView style={{ flex: 1,backgroundColor:'red' }}>
                    <Text onPress={() => navigation.navigate('testscreen2')}>
                        GoIt's been a long day without you, my friend
And I'll tell you all about it when I see you again
We've come a long way from where we began
Oh, I'll tell you all about it when I see you again
When I see you again
Damn, who knew?
All the planes we flew, good things we been through
That I'd be standin' right here talkin' to you
'Bout another path, I know we loved to hit the road and laugh
But somethin' told me that it wouldn't last
Had to switch up, look at things different, see the bigger picture
Those were the days, hard work forever pays
Now I see you in a better place (see you in a better place)
Uh
How can we not talk about family when family's all that we got?
Everythin' I went through, you were standin' there by my side
And now you gon' be with me for the last ride
It's been a long day without you, my friend
And I'll tell you all about it when I see you again (I'll see you again)
We've come a long way (yeah, we came a long way)
From where we began (you know where we started)
Oh, I'll tell you all about it when I see you again (let me tell you)
When I see you again
Oh, oh
Ooh (yeah)
First, you both go out your way and the vibe is feelin' strong
And what's small turned to a friendship, a friendship turned to a bond
And that bond'll never be broken, the love will never get lost
(The love never get lost)
And when brotherhood come first, then the line'll never be crossed
Established it on our own when that line had to be drawn
And that line is what we reached, so remember me when I'm gone
(Remember me when I'm gone)
How can we not talk about family when family's all that we got?
Everythin' I went through, you were standin' there by my side
And now you gon' be with me for the last ride
So let the light guide your way, yeah
Hold every memory as you go
And every road you take
Will always lead you home, home
It's been a long day without you, my friend
And I'll tell you all about it when I see you again
We've come a long way from where we began
Oh, I'll tell you all about it when I see you again
When I see you again
Oh (uh), oh (yeah-yeah, yeah)
Ooh (yo, yo, uh)
When I see you again (see you again, yeah, yeah)
Oh (yeah), oh (yeah, yeah, oh-oh)
Ooh (uh-huh, yup)
When I see you again
Source: Musixmatch
Songwriters: Cameron Jibril Thomaz / Phoebe Louise Cockburn / Justin Scott Franks / Andrew Cedar / Joshua Karl Simon Hardy / Daniel Hume / Charlie Otto Puth Jr.
See You Again lyrics © Wb Music Corp., Warner-tamerlane Publishing Corp., Universal Pictures Music, Artist Publishing Group West, J Franks Publishing, Artist 101 Publishing Group, Upg Music Publishing, Wiz Khalifa Publishing, Wc Music Corp., Andrew Cedar Publishing, Charlie Puth Music Publishing
Tyler, The Creator – See You Again Lyrics

Genius
https://genius.com › Tyler-the-creator-see-you-again-ly...
Jul 21, 2017 — See You Again Lyrics · 20/20, 20/20 vision · Cupid hit me, Cupid hit me with precision, I · Wonder if you look both ways when you cross my mind
Genius
https://genius.com › Tyler-the-creator-see-you-again-ly...
Jul 21, 2017 — See You Again Lyrics · 20/20, 20/20 vision · Cupid hit me, Cupid hit me with precision, I · Wonder if you look both ways when you cross my mind

                    </Text>
                </SafeAreaView>

        </>
    );
}

