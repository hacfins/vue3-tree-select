import type { ComponentPublicInstance, SetupContext, Ref } from 'vue';
import type { IPopperOptions, PopperInstance } from './defaults';
export declare type ElementType = ComponentPublicInstance | HTMLElement;
export declare type EmitType = 'update:visible' | 'after-enter' | 'after-leave' | 'before-enter' | 'before-leave';
export interface PopperEvents {
    onClick?: (e: Event) => void;
    onMouseenter?: (e: Event) => void;
    onMouseleave?: (e: Event) => void;
    onFocus?: (e: Event) => void;
    onBlur?: (e: Event) => void;
}
export declare const DEFAULT_TRIGGER: string[];
export declare const UPDATE_VISIBLE_EVENT = "update:visible";
export default function (props: IPopperOptions, { emit }: SetupContext<EmitType[]>): {
    update: () => void;
    doDestroy: (forceDestroy?: boolean) => void;
    show: () => void;
    hide: () => void;
    onPopperMouseEnter: () => void;
    onPopperMouseLeave: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
    onBeforeEnter: () => void;
    onBeforeLeave: () => void;
    initializePopper: () => void;
    isManualMode: () => boolean;
    arrowRef: Ref<HTMLElement>;
    events: PopperEvents;
    popperId: string;
    popperInstance: PopperInstance;
    popperRef: Ref<HTMLElement>;
    popperStyle: Ref<{
        alignContent?: string;
        alignItems?: string;
        alignSelf?: string;
        animationDelay?: string;
        animationDirection?: string;
        animationDuration?: string;
        animationFillMode?: string;
        animationIterationCount?: string | number;
        animationName?: string;
        animationPlayState?: string;
        animationTimingFunction?: string;
        appearance?: import("csstype").AppearanceProperty;
        aspectRatio?: string;
        backdropFilter?: string;
        backfaceVisibility?: import("csstype").BackfaceVisibilityProperty;
        backgroundAttachment?: string;
        backgroundBlendMode?: string;
        backgroundClip?: string;
        backgroundColor?: string;
        backgroundImage?: string;
        backgroundOrigin?: string;
        backgroundPosition?: string | number;
        backgroundPositionX?: string | number;
        backgroundPositionY?: string | number;
        backgroundRepeat?: string;
        backgroundSize?: string | number;
        blockOverflow?: string;
        blockSize?: string | number;
        borderBlockColor?: string;
        borderBlockEndColor?: string;
        borderBlockEndStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderBlockEndWidth?: string | number;
        borderBlockStartColor?: string;
        borderBlockStartStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderBlockStartWidth?: string | number;
        borderBlockStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderBlockWidth?: string | number;
        borderBottomColor?: string;
        borderBottomLeftRadius?: string | number;
        borderBottomRightRadius?: string | number;
        borderBottomStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderBottomWidth?: string | number;
        borderCollapse?: import("csstype").BorderCollapseProperty;
        borderEndEndRadius?: string | number;
        borderEndStartRadius?: string | number;
        borderImageOutset?: string | number;
        borderImageRepeat?: string;
        borderImageSlice?: string | number;
        borderImageSource?: string;
        borderImageWidth?: string | number;
        borderInlineColor?: string;
        borderInlineEndColor?: string;
        borderInlineEndStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderInlineEndWidth?: string | number;
        borderInlineStartColor?: string;
        borderInlineStartStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderInlineStartWidth?: string | number;
        borderInlineStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderInlineWidth?: string | number;
        borderLeftColor?: string;
        borderLeftStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderLeftWidth?: string | number;
        borderRightColor?: string;
        borderRightStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderRightWidth?: string | number;
        borderSpacing?: string | number;
        borderStartEndRadius?: string | number;
        borderStartStartRadius?: string | number;
        borderTopColor?: string;
        borderTopLeftRadius?: string | number;
        borderTopRightRadius?: string | number;
        borderTopStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderTopWidth?: string | number;
        bottom?: string | number;
        boxDecorationBreak?: import("csstype").BoxDecorationBreakProperty;
        boxShadow?: string;
        boxSizing?: import("csstype").BoxSizingProperty;
        breakAfter?: import("csstype").BreakAfterProperty;
        breakBefore?: import("csstype").BreakAfterProperty;
        breakInside?: import("csstype").BreakInsideProperty;
        captionSide?: import("csstype").CaptionSideProperty;
        caretColor?: string;
        clear?: import("csstype").ClearProperty;
        clipPath?: string;
        color?: string;
        colorAdjust?: import("csstype").ColorAdjustProperty;
        columnCount?: import("csstype").ZIndexProperty;
        columnFill?: import("csstype").ColumnFillProperty;
        columnGap?: string | number;
        columnRuleColor?: string;
        columnRuleStyle?: string;
        columnRuleWidth?: string | number;
        columnSpan?: import("csstype").ColumnSpanProperty;
        columnWidth?: string | number;
        contain?: string;
        content?: string;
        counterIncrement?: string;
        counterReset?: string;
        counterSet?: string;
        cursor?: string;
        direction?: import("csstype").DirectionProperty;
        display?: string;
        emptyCells?: import("csstype").EmptyCellsProperty;
        filter?: string;
        flexBasis?: string | number;
        flexDirection?: import("csstype").FlexDirectionProperty;
        flexGrow?: import("csstype").GlobalsNumber;
        flexShrink?: import("csstype").GlobalsNumber;
        flexWrap?: import("csstype").FlexWrapProperty;
        float?: import("csstype").FloatProperty;
        fontFamily?: string;
        fontFeatureSettings?: string;
        fontKerning?: import("csstype").FontKerningProperty;
        fontLanguageOverride?: string;
        fontOpticalSizing?: import("csstype").FontOpticalSizingProperty;
        fontSize?: string | number;
        fontSizeAdjust?: import("csstype").FontSizeAdjustProperty;
        fontStretch?: string;
        fontStyle?: string;
        fontSynthesis?: string;
        fontVariant?: string;
        fontVariantCaps?: import("csstype").FontVariantCapsProperty;
        fontVariantEastAsian?: string;
        fontVariantLigatures?: string;
        fontVariantNumeric?: string;
        fontVariantPosition?: import("csstype").FontVariantPositionProperty;
        fontVariationSettings?: string;
        fontWeight?: import("csstype").FontWeightProperty;
        gridAutoColumns?: string | number;
        gridAutoFlow?: string;
        gridAutoRows?: string | number;
        gridColumnEnd?: string | number;
        gridColumnStart?: string | number;
        gridRowEnd?: string | number;
        gridRowStart?: string | number;
        gridTemplateAreas?: string;
        gridTemplateColumns?: string | number;
        gridTemplateRows?: string | number;
        hangingPunctuation?: string;
        height?: string | number;
        hyphens?: import("csstype").HyphensProperty;
        imageOrientation?: string;
        imageRendering?: import("csstype").ImageRenderingProperty;
        imageResolution?: string;
        initialLetter?: string | number;
        inlineSize?: string | number;
        inset?: string | number;
        insetBlock?: string | number;
        insetBlockEnd?: string | number;
        insetBlockStart?: string | number;
        insetInline?: string | number;
        insetInlineEnd?: string | number;
        insetInlineStart?: string | number;
        isolation?: import("csstype").IsolationProperty;
        justifyContent?: string;
        justifyItems?: string;
        justifySelf?: string;
        left?: string | number;
        letterSpacing?: string | number;
        lineBreak?: import("csstype").LineBreakProperty;
        lineHeight?: string | number;
        lineHeightStep?: string | number;
        listStyleImage?: string;
        listStylePosition?: import("csstype").ListStylePositionProperty;
        listStyleType?: string;
        marginBlock?: string | number;
        marginBlockEnd?: string | number;
        marginBlockStart?: string | number;
        marginBottom?: string | number;
        marginInline?: string | number;
        marginInlineEnd?: string | number;
        marginInlineStart?: string | number;
        marginLeft?: string | number;
        marginRight?: string | number;
        marginTop?: string | number;
        maskBorderMode?: import("csstype").MaskBorderModeProperty;
        maskBorderOutset?: string | number;
        maskBorderRepeat?: string;
        maskBorderSlice?: string | number;
        maskBorderSource?: string;
        maskBorderWidth?: string | number;
        maskClip?: string;
        maskComposite?: string;
        maskImage?: string;
        maskMode?: string;
        maskOrigin?: string;
        maskPosition?: string | number;
        maskRepeat?: string;
        maskSize?: string | number;
        maskType?: import("csstype").MaskBorderModeProperty;
        maxBlockSize?: string | number;
        maxHeight?: string | number;
        maxInlineSize?: string | number;
        maxLines?: import("csstype").FontSizeAdjustProperty;
        maxWidth?: string | number;
        minBlockSize?: string | number;
        minHeight?: string | number;
        minInlineSize?: string | number;
        minWidth?: string | number;
        mixBlendMode?: import("csstype").MixBlendModeProperty;
        motionDistance?: string | number;
        motionPath?: string;
        motionRotation?: string;
        objectFit?: import("csstype").ObjectFitProperty;
        objectPosition?: string | number;
        offsetAnchor?: string | number;
        offsetDistance?: string | number;
        offsetPath?: string;
        offsetRotate?: string;
        offsetRotation?: string;
        opacity?: string | number;
        order?: import("csstype").GlobalsNumber;
        orphans?: import("csstype").GlobalsNumber;
        outlineColor?: string;
        outlineOffset?: string | number;
        outlineStyle?: string;
        outlineWidth?: string | number;
        overflowAnchor?: import("csstype").FontOpticalSizingProperty;
        overflowBlock?: import("csstype").OverflowBlockProperty;
        overflowClipBox?: import("csstype").OverflowClipBoxProperty;
        overflowInline?: import("csstype").OverflowBlockProperty;
        overflowWrap?: import("csstype").OverflowWrapProperty;
        overflowX?: import("csstype").OverflowXProperty;
        overflowY?: import("csstype").OverflowXProperty;
        overscrollBehavior?: string;
        overscrollBehaviorBlock?: import("csstype").OverscrollBehaviorBlockProperty;
        overscrollBehaviorInline?: import("csstype").OverscrollBehaviorBlockProperty;
        overscrollBehaviorX?: import("csstype").OverscrollBehaviorBlockProperty;
        overscrollBehaviorY?: import("csstype").OverscrollBehaviorBlockProperty;
        paddingBlock?: string | number;
        paddingBlockEnd?: string | number;
        paddingBlockStart?: string | number;
        paddingBottom?: string | number;
        paddingInline?: string | number;
        paddingInlineEnd?: string | number;
        paddingInlineStart?: string | number;
        paddingLeft?: string | number;
        paddingRight?: string | number;
        paddingTop?: string | number;
        pageBreakAfter?: import("csstype").PageBreakAfterProperty;
        pageBreakBefore?: import("csstype").PageBreakAfterProperty;
        pageBreakInside?: import("csstype").PageBreakInsideProperty;
        paintOrder?: string;
        perspective?: string | number;
        perspectiveOrigin?: string | number;
        placeContent?: string;
        pointerEvents?: import("csstype").PointerEventsProperty;
        position?: import("csstype").PositionProperty;
        quotes?: string;
        resize?: import("csstype").ResizeProperty;
        right?: string | number;
        rotate?: string;
        rowGap?: string | number;
        rubyAlign?: import("csstype").RubyAlignProperty;
        rubyMerge?: import("csstype").RubyMergeProperty;
        rubyPosition?: import("csstype").RubyPositionProperty;
        scale?: string | number;
        scrollBehavior?: import("csstype").ScrollBehaviorProperty;
        scrollMargin?: string | number;
        scrollMarginBlock?: string | number;
        scrollMarginBlockEnd?: string | number;
        scrollMarginBlockStart?: string | number;
        scrollMarginBottom?: string | number;
        scrollMarginInline?: string | number;
        scrollMarginInlineEnd?: string | number;
        scrollMarginInlineStart?: string | number;
        scrollMarginLeft?: string | number;
        scrollMarginRight?: string | number;
        scrollMarginTop?: string | number;
        scrollPadding?: string | number;
        scrollPaddingBlock?: string | number;
        scrollPaddingBlockEnd?: string | number;
        scrollPaddingBlockStart?: string | number;
        scrollPaddingBottom?: string | number;
        scrollPaddingInline?: string | number;
        scrollPaddingInlineEnd?: string | number;
        scrollPaddingInlineStart?: string | number;
        scrollPaddingLeft?: string | number;
        scrollPaddingRight?: string | number;
        scrollPaddingTop?: string | number;
        scrollSnapAlign?: string;
        scrollSnapMargin?: string | number;
        scrollSnapMarginBottom?: string | number;
        scrollSnapMarginLeft?: string | number;
        scrollSnapMarginRight?: string | number;
        scrollSnapMarginTop?: string | number;
        scrollSnapStop?: import("csstype").ScrollSnapStopProperty;
        scrollSnapType?: string;
        scrollbarColor?: string;
        scrollbarWidth?: import("csstype").ScrollbarWidthProperty;
        shapeImageThreshold?: string | number;
        shapeMargin?: string | number;
        shapeOutside?: string;
        tabSize?: string | number;
        tableLayout?: import("csstype").TableLayoutProperty;
        textAlign?: import("csstype").TextAlignProperty;
        textAlignLast?: import("csstype").TextAlignLastProperty;
        textCombineUpright?: string;
        textDecorationColor?: string;
        textDecorationLine?: string;
        textDecorationSkip?: string;
        textDecorationSkipInk?: import("csstype").TextDecorationSkipInkProperty;
        textDecorationStyle?: import("csstype").TextDecorationStyleProperty;
        textDecorationThickness?: string | number;
        textDecorationWidth?: string | number;
        textEmphasisColor?: string;
        textEmphasisPosition?: string;
        textEmphasisStyle?: string;
        textIndent?: string | number;
        textJustify?: import("csstype").TextJustifyProperty;
        textOrientation?: import("csstype").TextOrientationProperty;
        textOverflow?: string;
        textRendering?: import("csstype").TextRenderingProperty;
        textShadow?: string;
        textSizeAdjust?: string;
        textTransform?: import("csstype").TextTransformProperty;
        textUnderlineOffset?: string | number;
        textUnderlinePosition?: string;
        top?: string | number;
        touchAction?: string;
        transform?: string;
        transformBox?: import("csstype").TransformBoxProperty;
        transformOrigin?: string | number;
        transformStyle?: import("csstype").TransformStyleProperty;
        transitionDelay?: string;
        transitionDuration?: string;
        transitionProperty?: string;
        transitionTimingFunction?: string;
        translate?: string | number;
        unicodeBidi?: import("csstype").UnicodeBidiProperty;
        userSelect?: import("csstype").UserSelectProperty;
        verticalAlign?: string | number;
        visibility?: import("csstype").VisibilityProperty;
        whiteSpace?: import("csstype").WhiteSpaceProperty;
        widows?: import("csstype").GlobalsNumber;
        width?: string | number;
        willChange?: string;
        wordBreak?: import("csstype").WordBreakProperty;
        wordSpacing?: string | number;
        wordWrap?: import("csstype").WordWrapProperty;
        writingMode?: import("csstype").WritingModeProperty;
        zIndex?: import("csstype").ZIndexProperty;
        zoom?: string | number;
        all?: import("csstype").Globals;
        animation?: string | number;
        background?: string | number;
        border?: string | number;
        borderBlock?: string | number;
        borderBlockEnd?: string | number;
        borderBlockStart?: string | number;
        borderBottom?: string | number;
        borderColor?: string;
        borderImage?: string | number;
        borderInline?: string | number;
        borderInlineEnd?: string | number;
        borderInlineStart?: string | number;
        borderLeft?: string | number;
        borderRadius?: string | number;
        borderRight?: string | number;
        borderStyle?: string;
        borderTop?: string | number;
        borderWidth?: string | number;
        columnRule?: string | number;
        columns?: string | number;
        flex?: string | number;
        flexFlow?: string;
        font?: string;
        gap?: string | number;
        grid?: string;
        gridArea?: string | number;
        gridColumn?: string | number;
        gridRow?: string | number;
        gridTemplate?: string;
        lineClamp?: import("csstype").FontSizeAdjustProperty;
        listStyle?: string;
        margin?: string | number;
        mask?: string | number;
        maskBorder?: string | number;
        motion?: string | number;
        offset?: string | number;
        outline?: string | number;
        overflow?: string;
        padding?: string | number;
        placeItems?: string;
        placeSelf?: string;
        textDecoration?: string | number;
        textEmphasis?: string;
        transition?: string;
        MozAnimationDelay?: string;
        MozAnimationDirection?: string;
        MozAnimationDuration?: string;
        MozAnimationFillMode?: string;
        MozAnimationIterationCount?: string | number;
        MozAnimationName?: string;
        MozAnimationPlayState?: string;
        MozAnimationTimingFunction?: string;
        MozAppearance?: import("csstype").MozAppearanceProperty;
        MozBackfaceVisibility?: import("csstype").BackfaceVisibilityProperty;
        MozBorderBottomColors?: string;
        MozBorderEndColor?: string;
        MozBorderEndStyle?: import("csstype").BorderBlockEndStyleProperty;
        MozBorderEndWidth?: string | number;
        MozBorderLeftColors?: string;
        MozBorderRightColors?: string;
        MozBorderStartColor?: string;
        MozBorderStartStyle?: import("csstype").BorderBlockEndStyleProperty;
        MozBorderTopColors?: string;
        MozBoxSizing?: import("csstype").BoxSizingProperty;
        MozColumnCount?: import("csstype").ZIndexProperty;
        MozColumnFill?: import("csstype").ColumnFillProperty;
        MozColumnGap?: string | number;
        MozColumnRuleColor?: string;
        MozColumnRuleStyle?: string;
        MozColumnRuleWidth?: string | number;
        MozColumnWidth?: string | number;
        MozContextProperties?: string;
        MozFloatEdge?: import("csstype").MozFloatEdgeProperty;
        MozFontFeatureSettings?: string;
        MozFontLanguageOverride?: string;
        MozForceBrokenImageIcon?: import("csstype").GlobalsNumber;
        MozHyphens?: import("csstype").HyphensProperty;
        MozImageRegion?: string;
        MozMarginEnd?: string | number;
        MozMarginStart?: string | number;
        MozOrient?: import("csstype").MozOrientProperty;
        MozOutlineRadiusBottomleft?: string | number;
        MozOutlineRadiusBottomright?: string | number;
        MozOutlineRadiusTopleft?: string | number;
        MozOutlineRadiusTopright?: string | number;
        MozPaddingEnd?: string | number;
        MozPaddingStart?: string | number;
        MozPerspective?: string | number;
        MozPerspectiveOrigin?: string | number;
        MozStackSizing?: import("csstype").MozStackSizingProperty;
        MozTabSize?: string | number;
        MozTextBlink?: import("csstype").MozTextBlinkProperty;
        MozTextSizeAdjust?: string;
        MozTransformOrigin?: string | number;
        MozTransformStyle?: import("csstype").TransformStyleProperty;
        MozTransitionDelay?: string;
        MozTransitionDuration?: string;
        MozTransitionProperty?: string;
        MozTransitionTimingFunction?: string;
        MozUserFocus?: import("csstype").MozUserFocusProperty;
        MozUserModify?: import("csstype").MozUserModifyProperty;
        MozUserSelect?: import("csstype").UserSelectProperty;
        MozWindowDragging?: import("csstype").MozWindowDraggingProperty;
        MozWindowShadow?: import("csstype").MozWindowShadowProperty;
        msAccelerator?: import("csstype").MsAcceleratorProperty;
        msAlignSelf?: string;
        msBlockProgression?: import("csstype").MsBlockProgressionProperty;
        msContentZoomChaining?: import("csstype").MsContentZoomChainingProperty;
        msContentZoomLimitMax?: string;
        msContentZoomLimitMin?: string;
        msContentZoomSnapPoints?: string;
        msContentZoomSnapType?: import("csstype").MsContentZoomSnapTypeProperty;
        msContentZooming?: import("csstype").MsContentZoomingProperty;
        msFilter?: string;
        msFlexDirection?: import("csstype").FlexDirectionProperty;
        msFlexPositive?: import("csstype").GlobalsNumber;
        msFlowFrom?: string;
        msFlowInto?: string;
        msGridColumns?: string | number;
        msGridRows?: string | number;
        msHighContrastAdjust?: import("csstype").FontOpticalSizingProperty;
        msHyphenateLimitChars?: string | number;
        msHyphenateLimitLines?: import("csstype").MsHyphenateLimitLinesProperty;
        msHyphenateLimitZone?: string | number;
        msHyphens?: import("csstype").HyphensProperty;
        msImeAlign?: import("csstype").MsImeAlignProperty;
        msLineBreak?: import("csstype").LineBreakProperty;
        msOrder?: import("csstype").GlobalsNumber;
        msOverflowStyle?: import("csstype").MsOverflowStyleProperty;
        msOverflowX?: import("csstype").OverflowXProperty;
        msOverflowY?: import("csstype").OverflowXProperty;
        msScrollChaining?: import("csstype").MsContentZoomChainingProperty;
        msScrollLimitXMax?: string | number;
        msScrollLimitXMin?: string | number;
        msScrollLimitYMax?: string | number;
        msScrollLimitYMin?: string | number;
        msScrollRails?: import("csstype").MsScrollRailsProperty;
        msScrollSnapPointsX?: string;
        msScrollSnapPointsY?: string;
        msScrollSnapType?: import("csstype").MsContentZoomSnapTypeProperty;
        msScrollTranslation?: import("csstype").MsScrollTranslationProperty;
        msScrollbar3dlightColor?: string;
        msScrollbarArrowColor?: string;
        msScrollbarBaseColor?: string;
        msScrollbarDarkshadowColor?: string;
        msScrollbarFaceColor?: string;
        msScrollbarHighlightColor?: string;
        msScrollbarShadowColor?: string;
        msTextAutospace?: import("csstype").MsTextAutospaceProperty;
        msTextCombineHorizontal?: string;
        msTextOverflow?: string;
        msTouchAction?: string;
        msTouchSelect?: import("csstype").MsTouchSelectProperty;
        msTransform?: string;
        msTransformOrigin?: string | number;
        msTransitionDelay?: string;
        msTransitionDuration?: string;
        msTransitionProperty?: string;
        msTransitionTimingFunction?: string;
        msUserSelect?: import("csstype").MsUserSelectProperty;
        msWordBreak?: import("csstype").WordBreakProperty;
        msWrapFlow?: import("csstype").MsWrapFlowProperty;
        msWrapMargin?: string | number;
        msWrapThrough?: import("csstype").MsWrapThroughProperty;
        msWritingMode?: import("csstype").WritingModeProperty;
        OObjectFit?: import("csstype").ObjectFitProperty;
        OObjectPosition?: string | number;
        OTabSize?: string | number;
        OTextOverflow?: string;
        OTransformOrigin?: string | number;
        WebkitAlignContent?: string;
        WebkitAlignItems?: string;
        WebkitAlignSelf?: string;
        WebkitAnimationDelay?: string;
        WebkitAnimationDirection?: string;
        WebkitAnimationDuration?: string;
        WebkitAnimationFillMode?: string;
        WebkitAnimationIterationCount?: string | number;
        WebkitAnimationName?: string;
        WebkitAnimationPlayState?: string;
        WebkitAnimationTimingFunction?: string;
        WebkitAppearance?: import("csstype").WebkitAppearanceProperty;
        WebkitBackdropFilter?: string;
        WebkitBackfaceVisibility?: import("csstype").BackfaceVisibilityProperty;
        WebkitBackgroundClip?: string;
        WebkitBackgroundOrigin?: string;
        WebkitBackgroundSize?: string | number;
        WebkitBorderBeforeColor?: string;
        WebkitBorderBeforeStyle?: string;
        WebkitBorderBeforeWidth?: string | number;
        WebkitBorderBottomLeftRadius?: string | number;
        WebkitBorderBottomRightRadius?: string | number;
        WebkitBorderImageSlice?: string | number;
        WebkitBorderTopLeftRadius?: string | number;
        WebkitBorderTopRightRadius?: string | number;
        WebkitBoxDecorationBreak?: import("csstype").BoxDecorationBreakProperty;
        WebkitBoxReflect?: string | number;
        WebkitBoxShadow?: string;
        WebkitBoxSizing?: import("csstype").BoxSizingProperty;
        WebkitClipPath?: string;
        WebkitColumnCount?: import("csstype").ZIndexProperty;
        WebkitColumnFill?: import("csstype").ColumnFillProperty;
        WebkitColumnGap?: string | number;
        WebkitColumnRuleColor?: string;
        WebkitColumnRuleStyle?: string;
        WebkitColumnRuleWidth?: string | number;
        WebkitColumnSpan?: import("csstype").ColumnSpanProperty;
        WebkitColumnWidth?: string | number;
        WebkitFilter?: string;
        WebkitFlexBasis?: string | number;
        WebkitFlexDirection?: import("csstype").FlexDirectionProperty;
        WebkitFlexGrow?: import("csstype").GlobalsNumber;
        WebkitFlexShrink?: import("csstype").GlobalsNumber;
        WebkitFlexWrap?: import("csstype").FlexWrapProperty;
        WebkitFontFeatureSettings?: string;
        WebkitFontKerning?: import("csstype").FontKerningProperty;
        WebkitFontVariantLigatures?: string;
        WebkitHyphens?: import("csstype").HyphensProperty;
        WebkitJustifyContent?: string;
        WebkitLineBreak?: import("csstype").LineBreakProperty;
        WebkitLineClamp?: import("csstype").FontSizeAdjustProperty;
        WebkitMarginEnd?: string | number;
        WebkitMarginStart?: string | number;
        WebkitMaskAttachment?: string;
        WebkitMaskClip?: string;
        WebkitMaskComposite?: string;
        WebkitMaskImage?: string;
        WebkitMaskOrigin?: string;
        WebkitMaskPosition?: string | number;
        WebkitMaskPositionX?: string | number;
        WebkitMaskPositionY?: string | number;
        WebkitMaskRepeat?: string;
        WebkitMaskRepeatX?: import("csstype").WebkitMaskRepeatXProperty;
        WebkitMaskRepeatY?: import("csstype").WebkitMaskRepeatXProperty;
        WebkitMaskSize?: string | number;
        WebkitMaxInlineSize?: string | number;
        WebkitOrder?: import("csstype").GlobalsNumber;
        WebkitOverflowScrolling?: import("csstype").WebkitOverflowScrollingProperty;
        WebkitPaddingEnd?: string | number;
        WebkitPaddingStart?: string | number;
        WebkitPerspective?: string | number;
        WebkitPerspectiveOrigin?: string | number;
        WebkitPrintColorAdjust?: import("csstype").ColorAdjustProperty;
        WebkitScrollSnapType?: string;
        WebkitShapeMargin?: string | number;
        WebkitTapHighlightColor?: string;
        WebkitTextCombine?: string;
        WebkitTextDecorationColor?: string;
        WebkitTextDecorationLine?: string;
        WebkitTextDecorationSkip?: string;
        WebkitTextDecorationStyle?: import("csstype").TextDecorationStyleProperty;
        WebkitTextEmphasisColor?: string;
        WebkitTextEmphasisPosition?: string;
        WebkitTextEmphasisStyle?: string;
        WebkitTextFillColor?: string;
        WebkitTextOrientation?: import("csstype").TextOrientationProperty;
        WebkitTextSizeAdjust?: string;
        WebkitTextStrokeColor?: string;
        WebkitTextStrokeWidth?: string | number;
        WebkitTextUnderlinePosition?: string;
        WebkitTouchCallout?: import("csstype").WebkitTouchCalloutProperty;
        WebkitTransform?: string;
        WebkitTransformOrigin?: string | number;
        WebkitTransformStyle?: import("csstype").TransformStyleProperty;
        WebkitTransitionDelay?: string;
        WebkitTransitionDuration?: string;
        WebkitTransitionProperty?: string;
        WebkitTransitionTimingFunction?: string;
        WebkitUserModify?: import("csstype").WebkitUserModifyProperty;
        WebkitUserSelect?: import("csstype").UserSelectProperty;
        WebkitWritingMode?: import("csstype").WritingModeProperty;
        MozAnimation?: string | number;
        MozBorderImage?: string | number;
        MozColumnRule?: string | number;
        MozColumns?: string | number;
        MozTransition?: string;
        msContentZoomLimit?: string;
        msContentZoomSnap?: string;
        msFlex?: string | number;
        msScrollLimit?: string;
        msScrollSnapX?: string;
        msScrollSnapY?: string;
        msTransition?: string;
        WebkitAnimation?: string | number;
        WebkitBorderBefore?: string | number;
        WebkitBorderImage?: string | number;
        WebkitBorderRadius?: string | number;
        WebkitColumnRule?: string | number;
        WebkitColumns?: string | number;
        WebkitFlex?: string | number;
        WebkitFlexFlow?: string;
        WebkitMask?: string | number;
        WebkitTextEmphasis?: string;
        WebkitTextStroke?: string | number;
        WebkitTransition?: string;
        boxAlign?: import("csstype").BoxAlignProperty;
        boxDirection?: import("csstype").BoxDirectionProperty;
        boxFlex?: import("csstype").GlobalsNumber;
        boxFlexGroup?: import("csstype").GlobalsNumber;
        boxLines?: import("csstype").BoxLinesProperty;
        boxOrdinalGroup?: import("csstype").GlobalsNumber;
        boxOrient?: import("csstype").BoxOrientProperty;
        boxPack?: import("csstype").BoxPackProperty;
        clip?: string;
        fontVariantAlternates?: string;
        gridColumnGap?: string | number;
        gridGap?: string | number;
        gridRowGap?: string | number;
        imeMode?: import("csstype").ImeModeProperty;
        offsetBlock?: string | number;
        offsetBlockEnd?: string | number;
        offsetBlockStart?: string | number;
        offsetInline?: string | number;
        offsetInlineEnd?: string | number;
        offsetInlineStart?: string | number;
        scrollSnapCoordinate?: string | number;
        scrollSnapDestination?: string | number;
        scrollSnapPointsX?: string;
        scrollSnapPointsY?: string;
        scrollSnapTypeX?: import("csstype").MsContentZoomSnapTypeProperty;
        scrollSnapTypeY?: import("csstype").MsContentZoomSnapTypeProperty;
        scrollbarTrackColor?: string;
        textCombineHorizontal?: string;
        KhtmlBoxAlign?: import("csstype").BoxAlignProperty;
        KhtmlBoxDirection?: import("csstype").BoxDirectionProperty;
        KhtmlBoxFlex?: import("csstype").GlobalsNumber;
        KhtmlBoxFlexGroup?: import("csstype").GlobalsNumber;
        KhtmlBoxLines?: import("csstype").BoxLinesProperty;
        KhtmlBoxOrdinalGroup?: import("csstype").GlobalsNumber;
        KhtmlBoxOrient?: import("csstype").BoxOrientProperty;
        KhtmlBoxPack?: import("csstype").BoxPackProperty;
        KhtmlLineBreak?: import("csstype").LineBreakProperty;
        KhtmlOpacity?: string | number;
        KhtmlUserSelect?: import("csstype").UserSelectProperty;
        MozBackgroundClip?: string;
        MozBackgroundInlinePolicy?: import("csstype").BoxDecorationBreakProperty;
        MozBackgroundOrigin?: string;
        MozBackgroundSize?: string | number;
        MozBinding?: string;
        MozBorderRadius?: string | number;
        MozBorderRadiusBottomleft?: string | number;
        MozBorderRadiusBottomright?: string | number;
        MozBorderRadiusTopleft?: string | number;
        MozBorderRadiusTopright?: string | number;
        MozBoxAlign?: import("csstype").BoxAlignProperty;
        MozBoxDirection?: import("csstype").BoxDirectionProperty;
        MozBoxFlex?: import("csstype").GlobalsNumber;
        MozBoxOrdinalGroup?: import("csstype").GlobalsNumber;
        MozBoxOrient?: import("csstype").BoxOrientProperty;
        MozBoxPack?: import("csstype").BoxPackProperty;
        MozBoxShadow?: string;
        MozOpacity?: string | number;
        MozOutline?: string | number;
        MozOutlineColor?: string;
        MozOutlineRadius?: string | number;
        MozOutlineStyle?: string;
        MozOutlineWidth?: string | number;
        MozTextAlignLast?: import("csstype").TextAlignLastProperty;
        MozTextDecorationColor?: string;
        MozTextDecorationLine?: string;
        MozTextDecorationStyle?: import("csstype").TextDecorationStyleProperty;
        MozUserInput?: import("csstype").MozUserInputProperty;
        msImeMode?: import("csstype").ImeModeProperty;
        msScrollbarTrackColor?: string;
        OAnimation?: string | number;
        OAnimationDelay?: string;
        OAnimationDirection?: string;
        OAnimationDuration?: string;
        OAnimationFillMode?: string;
        OAnimationIterationCount?: string | number;
        OAnimationName?: string;
        OAnimationPlayState?: string;
        OAnimationTimingFunction?: string;
        OBackgroundSize?: string | number;
        OBorderImage?: string | number;
        OTransform?: string;
        OTransition?: string;
        OTransitionDelay?: string;
        OTransitionDuration?: string;
        OTransitionProperty?: string;
        OTransitionTimingFunction?: string;
        WebkitBoxAlign?: import("csstype").BoxAlignProperty;
        WebkitBoxDirection?: import("csstype").BoxDirectionProperty;
        WebkitBoxFlex?: import("csstype").GlobalsNumber;
        WebkitBoxFlexGroup?: import("csstype").GlobalsNumber;
        WebkitBoxLines?: import("csstype").BoxLinesProperty;
        WebkitBoxOrdinalGroup?: import("csstype").GlobalsNumber;
        WebkitBoxOrient?: import("csstype").BoxOrientProperty;
        WebkitBoxPack?: import("csstype").BoxPackProperty;
        WebkitScrollSnapPointsX?: string;
        WebkitScrollSnapPointsY?: string;
        alignmentBaseline?: import("csstype").AlignmentBaselineProperty;
        baselineShift?: string | number;
        clipRule?: import("csstype").ClipRuleProperty;
        colorInterpolation?: import("csstype").ColorInterpolationProperty;
        colorRendering?: import("csstype").ColorRenderingProperty;
        dominantBaseline?: import("csstype").DominantBaselineProperty;
        fill?: string;
        fillOpacity?: import("csstype").GlobalsNumber;
        fillRule?: import("csstype").ClipRuleProperty;
        floodColor?: string;
        floodOpacity?: import("csstype").GlobalsNumber;
        glyphOrientationVertical?: string | number;
        lightingColor?: string;
        marker?: string;
        markerEnd?: string;
        markerMid?: string;
        markerStart?: string;
        shapeRendering?: import("csstype").ShapeRenderingProperty;
        stopColor?: string;
        stopOpacity?: import("csstype").GlobalsNumber;
        stroke?: string;
        strokeDasharray?: string | number;
        strokeDashoffset?: string | number;
        strokeLinecap?: import("csstype").StrokeLinecapProperty;
        strokeLinejoin?: import("csstype").StrokeLinejoinProperty;
        strokeMiterlimit?: import("csstype").GlobalsNumber;
        strokeOpacity?: import("csstype").GlobalsNumber;
        strokeWidth?: string | number;
        textAnchor?: import("csstype").TextAnchorProperty;
        vectorEffect?: import("csstype").VectorEffectProperty;
    }>;
    triggerRef: Ref<ElementType>;
    visibility: import("vue").WritableComputedRef<boolean>;
};
export * from './defaults';
