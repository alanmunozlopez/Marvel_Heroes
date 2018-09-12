//
//  Avengers.m
//  MarvelHeroes
//
//  Created by Alan Munoz Lopez on 9/11/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "Avengers.h"
#import <AudioToolbox/AudioToolbox.h>
#import <AVFoundation/AVFoundation.h>


@implementation Avengers

AVAudioPlayer *_audioPlayer;

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  return @{@"greeting": @"Yes sir, this rocks =)!"};
}

RCT_EXPORT_METHOD(playTheme)
{
  printf("PLAY AVENGERS THEME");
  
  NSString *path = [NSString stringWithFormat:@"%@/avengers_theme.mp3", [[NSBundle mainBundle] resourcePath]];
  NSURL *soundUrl = [NSURL fileURLWithPath:path];
  
  _audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:soundUrl error:nil];
  
  [_audioPlayer play];
}

@end
