// TODO: consider changing these to enums
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT = 0;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP = 1;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4 = 2;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB = 3;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB = 4;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF = 5;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS = 6;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP = 7;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS = 8;
export const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM = 9;
export const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT = 0;
export const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB = 1;
export const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB = 2;
export const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC = 3;
export const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC = 4;
export const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD = 5;
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM = 'lpcm';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3 = 'ac-3';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3 = 'cac3';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4 = 'ima4';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC = 'aac ';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP = 'celp';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC = 'hvxc';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ = 'twvq';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3 = 'MAC3';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6 = 'MAC6';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW = 'ulaw';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW = 'alaw';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN = 'QDMC';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2 = 'QDM2';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM = 'Qclp';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1 = '.mp1';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2 = '.mp2';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3 = '.mp3';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS = 'alac';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE = 'aach';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD = 'aacl';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD = 'aace';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR = 'aacf';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2 = 'aacg';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2 = 'aacp';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL = 'aacs';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR = 'samr';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB = 'sawb';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE = 'AUDB';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC = 'ilbc';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA = 0x6d730011;
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM = 0x6d730031;
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3 = 'aes3';
export const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3 = 'ec-3';
export const RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN = 0;
export const RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW = 0x20;
export const RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM = 0x40;
export const RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH = 0x60;
export const RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX = 0x7f;
export const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT = 0;
export const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE = 1;
export const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED = 2;
export const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE = 3;
// TODO : maybe make presets for music and speech, or lossy / lossless.
export const RECORDING_OPTIONS_PRESET_HIGH_QUALITY = {
    isMeteringEnabled: true,
    android: {
        extension: '.m4a',
        outputFormat: RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.m4a',
        outputFormat: RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
        audioQuality: RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
    web: {
        mimeType: 'audio/webm',
        bitsPerSecond: 128000,
    },
};
export const RECORDING_OPTIONS_PRESET_LOW_QUALITY = {
    isMeteringEnabled: true,
    android: {
        extension: '.3gp',
        outputFormat: RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP,
        audioEncoder: RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.caf',
        audioQuality: RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
    web: {
        mimeType: 'audio/webm',
        bitsPerSecond: 128000,
    },
};
//# sourceMappingURL=RecordingConstants.js.map