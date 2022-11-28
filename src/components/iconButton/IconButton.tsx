import React, { FunctionComponent } from 'react';
import { TouchableOpacity, ViewStyle, StyleProp, Insets } from 'react-native';

export const DEFAULT_HIT_SLOP: Insets = { top: 10, bottom: 10, left: 10, right: 10 }

interface IconButtonProps {
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    icon: () => void;
    testId?: string;
    hitSlop?: Insets
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
    onPress,
    style,
    icon,
    testId,
    hitSlop = DEFAULT_HIT_SLOP,
}) => {
    return (
        <TouchableOpacity hitSlop={hitSlop} style={style} onPress={onPress} testID={testId}>
            {icon && icon()}
        </TouchableOpacity>
    );
};
