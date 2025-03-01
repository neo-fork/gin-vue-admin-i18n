export default {
  name: 'ar',
  form: {
    field: 'حقل',
    title: 'عنوان',
    info: 'معلومات',
    control: 'تحكم',
    labelPosition: 'موضع التسمية',
    labelStyle: 'نمط التسمية',
    labelSuffix: 'لاحقة التسمية',
    size: 'حجم النموذج',
    event: 'حدث النموذج',
    labelWidth: 'عرض التسمية',
    hideRequiredAsterisk: 'إخفاء النجمة الحمراء بجانب التسمية للحقل المطلوب',
    showMessage: 'عرض رسالة خطأ التحقق',
    inlineMessage: 'عرض معلومات التحقق في السطر',
    submitBtn: 'ما إذا كان سيتم عرض زر إرسال النموذج',
    resetBtn: 'ما إذا كان سيتم عرض زر إعادة تعيين النموذج',
    appendChild: 'إدراج طفل',
    formMode: 'وضع النموذج',
    formName: 'اسم النموذج',
    componentMode: 'مكون',
    document: 'وثيقة'
  },
  computed: {
    fieldUsed:
      '[{label}] مستخدم في صيغة الحساب، يرجى تعديل الصيغة المقابلة أولاً',
    fieldExist: '[{label}] الحقل موجود بالفعل',
    fieldEmpty: 'الحقل مطلوب',
    fieldChar: 'يجب أن يبدأ الحقل بحرف'
  },
  validate: {
    type: 'نوع',
    typePlaceholder: 'يرجى الاختيار',
    trigger: 'مشغل',
    mode: 'طريقة التحقق',
    modes: {
      required: 'مطلوب',
      pattern: 'نمط',
      validator: 'مدقق',
      min: 'الحد الأدنى',
      max: 'الحد الأقصى',
      len: 'طول'
    },
    types: {
      string: 'نص',
      array: 'متعدد',
      number: 'رقم',
      integer: 'عدد صحيح',
      float: 'عدد عشري',
      object: 'مجموعة',
      date: 'تاريخ',
      url: 'رابط',
      email: 'بريد إلكتروني'
    },
    message: 'خطأ',
    auto: 'تلقائي',
    autoRequired: 'يرجى إدخال {title}',
    autoMode: 'يرجى إدخال {title} الصحيح',
    requiredPlaceholder: 'يرجى الإدخال',
    required: 'هل هو مطلوب',
    rule: 'التحقق'
  },
  tableOptions: {
    handle: 'عملية',
    add: 'إضافة',
    empty1: 'انقر على الزاوية اليمنى السفلية',
    empty2: 'زر لإضافة عمود',
    rmCol: 'حذف العمود الحالي',
    rmRow: 'حذف الصف الحالي',
    splitRow: 'تقسيم إلى صفوف',
    splitCol: 'تقسيم إلى أعمدة',
    mergeBottom: 'دمج للأسفل',
    mergeRight: 'دمج لليمين',
    addTop: 'إضافة عمود علوي',
    addBottom: 'إضافة التالي',
    addLeft: 'إضافة عمود يساري',
    addRight: 'إضافة عمود يميني',
    keyValue: 'مفتاح-قيمة'
  },
  struct: {
    title: 'تحرير',
    only: '[{label}] يسمح بإضافة واحد فقط',
    errorMsg: 'محتوى الإدخال غير صحيح نحويًا',
    configured: 'مُكوّن'
  },
  event: {
    title: 'تحرير',
    create: 'إنشاء',
    list: 'قائمة',
    placeholder: 'يرجى إدخال اسم الحدث',
    saveMsg: 'يرجى حفظ الحدث الذي يتم تحريره حاليًا',
    type: 'نوع',
    info: 'معلومات',
    label: 'حقل',
    inject: {
      api: 'واجهة برمجة التطبيقات للنموذج الحالي',
      rule: 'توليد قواعد للنموذج الحالي',
      self: 'قاعدة توليد المكون',
      option: 'تكوين النموذج',
      args: 'المعلمات الأصلية للحدث'
    }
  },
  fetch: {
    title: 'تعيين البيانات',
    create: 'إنشاء بيانات',
    config: 'طلب',
    action: 'إجراء',
    actionRequired: 'يرجى إدخال الرابط الصحيح',
    placeholder: 'يرجى إدخال اسم مصدر البيانات',
    method: 'طريقة',
    data: 'مرفق',
    headers: 'رؤوس',
    parse: 'معالجة',
    response: 'البيانات التي تم إرجاعها من الواجهة',
    onError: 'عند الخطأ',
    remote: 'بعيد',
    static: 'ثابت',
    optionsType: {
      fetch: 'جلب',
      struct: 'ثابت'
    }
  },
  style: {
    width: 'عرض',
    height: 'ا��تفاع',
    color: 'لون',
    backgroundColor: 'لون الخلفية',
    margin: 'هامش',
    padding: 'حشوة',
    borderRadius: 'نصف قطر الحدود',
    border: 'حدود',
    solid: 'صلب',
    dashed: 'متقطع',
    dotted: 'منقط',
    double: 'مزدوج',
    opacity: 'شفافية',
    scale: 'مقياس',
    shadow: {
      name: 'ظل',
      x: 'إزاحة المحور السيني',
      y: 'إزاحة المحور الصادي',
      vague: 'نصف قطر التمويه',
      extend: 'نصف قطر الانتشار',
      inset: 'للداخل',
      external: 'للخارج',
      mode: 'وضع',
      classic: 'كلاسيكي',
      flat: 'مسطح',
      solid: 'مجسم'
    },
    font: {
      name: 'خط',
      size: 'حجم',
      align: 'محاذاة',
      height: 'ارتفاع السطر',
      spacing: 'تباعد الحروف',
      preview: 'معاينة'
    },
    decoration: {
      name: 'زخرفة',
      underline: 'تسطير',
      'line-through': 'خط في الوسط',
      overline: 'خط فوق النص'
    },
    weight: {
      name: 'وزن الخط',
      300: 'رفيع',
      400: 'افتراضي',
      500: 'متوسط',
      700: 'عريض'
    }
  },
  designer: {
    component: 'مكون',
    id: 'معرف فريد',
    name: 'رقم تسلسلي',
    type: 'نوع',
    form: 'نموذج',
    style: 'نمط',
    rule: 'قاعدة',
    advanced: 'متقدم',
    props: 'خصائص',
    validate: 'تحقق',
    event: 'حدث',
    clearWarn: 'لا يمكن استعادته بعد مسحه. هل أنت متأكد أنك تريد مسحه؟',
    childEmpty: 'انقر على الزر \\e789 في الزاوية اليمنى السفلية لإضافة عمود',
    dragEmpty: 'اسحب المكونات من القائمة على اليسار هنا',
    unload: 'هل أنت متأكد أنك تريد مغادرة الصفحة الحالية؟'
  },
  menu: {
    main: 'أساسي',
    aide: 'مساعد',
    layout: 'تخطيط',
    component: 'مكون',
    subform: 'نموذج فرعي',
    tree: 'هيكل'
  },
  props: {
    disabled: 'معطل',
    time: 'وقت',
    email: 'بريد إلكتروني',
    number: 'رقم',
    globalData: 'بيانات عالمية',
    mobile: 'جوال',
    pc: 'حاسوب',
    reactive: 'تفاعلي',
    title: 'عنوان',
    content: 'محتوى',
    collection: 'مجموعة',
    group: 'مجموعة',
    custom: 'مخصص',
    change: 'تغيير',
    blur: 'ضبابية',
    preview: 'معاينة',
    clear: 'مسح',
    cancel: 'إلغاء',
    close: 'إغلاق',
    ok: 'موافق',
    save: 'حفظ',
    refresh: 'تحديث',
    submit: 'إرسال',
    reset: 'إعادة تعيين',
    copy: 'نسخ',
    delete: 'حذف',
    hide: 'إخفاء',
    show: 'عرض',
    position: 'موضع',
    render: 'عرض',
    large: 'كبير',
    default: 'افتراضي',
    small: 'صغير',
    always: 'دائمًا',
    never: 'أبدًا',
    hover: 'تحويم',
    click: 'نقرة',
    button: 'زر',
    year: 'سنة',
    month: 'شهر',
    date: 'تاريخ',
    dates: 'تواريخ',
    week: 'أسبوع',
    datetime: 'تاريخ ووقت',
    'datetime-local': 'تاريخ ووقت محلي',
    datetimerange: 'نطاق التاريخ والوقت',
    daterange: 'نطاق التاريخ',
    monthrange: 'نطاق الشهر',
    left: 'يسار',
    right: 'يمين',
    top: 'أعلى',
    text: 'نص',
    picture: 'صورة',
    'picture-card': 'بطاقة صورة',
    center: 'مركز',
    vertical: 'عمودي',
    horizontal: 'أفقي',
    manage: 'إدارة',
    key: 'مفتاح',
    name: 'اسم',
    value: 'قيمة',
    inputData: 'القيمة الافتراضية',
    append: 'إلحاق',
    options: 'خيارات',
    option: 'خيار',
    callback: 'استدعاء',
    _self: 'النافذة الحالية',
    _blank: 'نافذة جديدة',
    _parent: 'النافذة الرئيسية',
    _top: 'النافذة العليا'
  },
  com: {
    cascader: {
      name: 'محدد متتالي',
      event: {
        expandChange: 'يتم تشغيله عند تغيير العقدة الموسعة',
        removeTag: 'في وضع التحديد المتعدد، يتم تشغيله عند إزالة العلامة'
      },
      props: {
        props: 'خيارات',
        placeholder: 'نص العنصر النائب',
        disabled: 'معطل',
        clearable: 'ما إذا كان يتم دعم مسح الخيارات',
        showAllLevels:
          'ما إذا كان يتم عرض المسار الكامل للقيمة المحددة في مربع الإدخال',
        collapseTags: 'ما إذا كان يتم طي العلامات في وضع التحديد المتعدد',
        collapseTagsTooltip:
          'ما إذا كان يتم عرض جميع العلامات المحددة عند تحويم الما��س فوق نص العلامة المطوية',
        separator: 'الفاصل',
        filterable: 'ما إذا كان يمكن البحث في هذا الخيار',
        tagType: 'النوع'
      },
      propsOpt: {
        multiple: 'ما إذا كان هناك تحديدات متعددة',
        expandTrigger: 'كيفية توسيع القائمة الثانوية',
        checkStrictly:
          'ما إذا ك��ن يتم الالتزام الصارم بأن العقد الأصلية والفرعية غير مرتبطة ببعضها البعض',
        emitPath:
          'عند تغيير العقدة المحددة، ما إذا كان يتم إرجاع مصفوفة تتكون من قيم القوائم في كل مستوى توجد فيه العقدة',
        value: 'قيمة الخيار المحدد هي قيمة سمة كائن الخيار',
        label: 'تحديد تسمية الخيار كقيمة سمة معينة لكائن الخيار',
        children: 'الخيار الفرعي للخيار المحدد هو قيمة سمة معينة لكائن الخيار',
        disabled: 'الخيار المحدد معطل كقيمة سمة معينة لكائن الخيار',
        leaf: 'بت العلم للعقدة الورقية للخيار المحدد هو قيمة سمة معينة لكائن الخيار'
      }
    },
    checkbox: {
      name: 'مربع اختيار',
      props: {
        input: 'ما إذا كان يتم ملء',
        type: 'النوع',
        disabled: 'معطل',
        min: 'الحد الأدنى لعدد العناصر التي يمكن تحديدها',
        max: 'الحد الأقصى لعدد العناصر التي يمكن تحديدها',
        textColor: 'لون الخط عند تنشيط الزر',
        fill: 'لون الحدود والخلفية عند تنشيط الزر'
      }
    },
    col: {
      name: 'عمود',
      props: {
        span: 'عدد الأعمدة التي يشغلها الشبكة',
        offset: 'عدد المسافات على الجانب الأيسر من الشبكة',
        push: 'تحريك الشبكة إلى اليمين بعدد الخلايا',
        pull: 'تحريك الشبكة إلى اليسار بعدد الخلايا'
      }
    },
    colorPicker: {
      name: 'منتقي الألوان',
      event: {
        activeChange: 'يتم تشغيله عند تغيير اللون المعروض حاليًا في اللوحة'
      },
      props: {
        disabled: 'معطل',
        showAlpha: 'ما إذا كان يتم دعم اختيار الشفافية',
        colorFormat: 'تنسيق اللون',
        predefine: 'لون محدد مسبقًا'
      }
    },
    datePicker: {
      name: 'تاريخ',
      props: {
        pickerOptions: 'خيارات محددة لمنتقي الوقت والتاريخ الحالي',
        readonly: 'للقراءة فقط',
        disabled: 'معطل',
        type: 'النوع',
        editable: 'يمكن إدخال النص في مربع النص',
        clearable: 'ما إذا كان يتم عرض زر المسح',
        placeholder: 'نص العنصر النائب للتحديد غير النطاق',
        startPlaceholder: 'نص العنصر النائب لتاريخ البدء عند تحديد النطاق',
        endPlaceholder: 'نص العنصر النائب لتاريخ الانتهاء عند تحديد النطاق',
        format: 'التنسيق المعروض في مربع الإدخال',
        align: 'المحاذاة',
        rangeSeparator: 'الفاصل عند تحديد النطاق',
        unlinkPanels: 'فصل لوحتي التاريخ في محدد النطاق'
      }
    },
    dateRange: {
      name: 'نطاق التاريخ'
    },
    timeRange: {
      name: 'نطاق الوقت'
    },
    elAlert: {
      name: 'تنبيه',
      description: 'الوصف',
      props: {
        title: 'العنوان',
        type: 'النوع',
        description: 'النص الداعم',
        closable: 'ما إذا كان يمكن إغلاقه',
        center: 'ما إذا كان النص متمركزًا',
        closeText: 'نص مخصص لزر الإغلاق',
        showIcon: 'ما إذا كان يتم عرض الأيقونة',
        effect: 'اختيار موضوع مقدم'
      }
    },
    elButton: {
      name: 'زر',
      props: {
        formCreateChild: 'المحتوى',
        size: 'الحجم',
        type: 'النوع',
        plain: 'ما إذا كان الزر عاديًا',
        round: 'ما إذا كان الزر ذو زوايا مستديرة',
        circle: 'ما إذا كان الزر دائريًا',
        loading: 'ما إذا كان في حالة التحميل',
        disabled: 'معطل'
      }
    },
    elCard: {
      name: 'بطاقة',
      props: {
        header: 'العنوان',
        shadow: 'توقيت عرض الظل'
      }
    },
    elCollapse: {
      name: 'طي',
      event: {
        change:
          'تبديل اللوحة النشطة حاليًا، نوعها هو سلسلة في وضع الأكورديون ومصفوفة في الأوضاع الأخرى'
      },
      props: {
        accordion: 'ما إذا كان في وضع الأكورديون'
      }
    },
    elCollapseItem: {
      name: 'عنصر الطي',
      props: {
        title: 'عنوان اللوحة',
        name: 'المعرف',
        disabled: 'معطل'
      }
    },
    elDivider: {
      name: 'فاصل',
      props: {
        formCreateChild: 'تعيين المحتوى',
        contentPosition: 'تعيين موضع المحتوى'
      }
    },
    elTabPane: {
      name: 'لوحة التبويب',
      props: {
        label: 'العنوان',
        disabled: 'معطل',
        name: 'معرف التبويب',
        lazy: 'ما إذا كان يتم تأخير عرض التسمية'
      }
    },
    elTabs: {
      name: 'تبويبات',
      event: {
        tabClick: 'يتم تشغيله عند تحديد التبويب',
        tabChange: 'يتم تشغيله عند تغيير activeName',
        tabRemove: 'يتم تشغيله عند النقر على زر إزالة التبويب',
        tabAdd: 'يتم تشغيله عند النقر على زر تبويب جديد',
        edit: 'يتم تشغيله بعد النقر على زر إضافة أو إزالة التبويب'
      },
      props: {
        type: 'النوع',
        closable: 'ما إذا كان يمكن إغلاق التسمية',
        tabPosition: 'موضع التبويب',
        stretch: 'ما إذا كان عرض التسمية يتمدد ذاتيًا'
      }
    },
    elTag: {
      name: 'علامة',
      props: {
        formCreateNative: 'ما إذا كان سيتم عرض العنوان',
        formCreateTitle: 'العن��ان',
        formCreateChild: 'المحتوى',
        type: 'النوع',
        size: 'حجم التسمية',
        effect: 'موضوع التسمية',
        closable: 'ما ��ذا كان يمكن إغلاقه',
        disableTransitions: 'ما إذا كان سيتم تعطيل الرسوم المتحركة التدرجية',
        hit: 'ما إذا كان هناك حد للحدود',
        round: 'ما إذا كان دائريًا',
        color: 'لون الخلفية'
      }
    },
    elTransfer: {
      name: 'نقل',
      event: {
        leftCheckChange:
          'يتم تشغيله عند تحديد/إلغاء تحديد عنصر القائمة اليسرى من قبل المستخدم',
        rightCheckChange:
          'يتم تشغيله عند تحديد/إلغاء تحديد عنصر القائمة اليمنى من قبل المستخدم'
      },
      props: {
        filterable: 'هل هو قابل للبحث',
        filterPlaceholder: 'نص العنصر النائب لمربع البحث',
        targetOrder: 'استراتيجية ترتيب عناصر القائمة على اليمين',
        targetOrderInfo:
          'إذا كان أصليًا، حافظ على نفس ترتيب البيانات؛ إذا كان دفعًا، سيتم ترتيب العناصر المضافة حديثًا في النهاية؛ إذا كان إدخالًا، سيتم ترتيب العناصر المضافة حديثًا في البداية',
        titles: 'العنوان',
        buttonTexts: 'تعيين محتوى الزر',
        props: 'اسم الحقل لمصدر البيانات'
      }
    },
    elTreeSelect: {
      name: 'تحديد الشجرة',
      event: {
        removeTag: 'يتم تشغيله عند إزالة العلامة في وضع التحديد المتعدد'
      },
      props: {
        multiple: 'ما إذا كان هناك تحديدات متعددة',
        disabled: 'معطل',
        clearable: 'ما إذا كان يمكن مسح الخيار',
        collapseTags:
          'ما إذا كان سيتم عرض القيمة المحددة كنص أثناء التحديد المتعدد',
        multipleLimit:
          'الحد الأقصى لعدد العناصر التي يمكن للمستخدم تحديدها أثناء التحديد المتعدد، إذا كان 0، فلا يوجد حد',
        placeholder: 'نص العنصر النائب',
        props: 'خيارات',
        renderAfterExpand:
          'ما إذا كان سيتم عرض العقد الفرعية بعد توسيع عقدة الشجرة لأول مرة',
        defaultExpandAll: 'ما إذا كان سيتم توسيع جميع العقد افتراضيًا',
        expandOnClickNode:
          'ما إذا كان سيتم توسيع أو تقليص العقد عند ال��قر عليها',
        checkOnClickNode: 'ما إذا كان سيتم تحديد العقدة عند النقر على العقدة',
        nodeKey:
          'كل عقدة شجرة تستخدم كخاصية للتعريف الفريد، ويجب أن تكون الشجرة بأكملها فريدة'
      }
    },
    fcEditor: {
      name: 'محرر',
      props: {
        disabled: 'معطل'
      }
    },
    fcRow: {
      name: 'صف',
      props: {
        gutter: 'فاصل الشبكة',
        type: 'وضع تخطيط Flex',
        justify: 'ترتيب أفقي تحت تخطيط Flex',
        align: 'ترتيب عمودي تحت تخطيط Flex'
      }
    },
    fcTable: {
      name: 'جدول',
      props: {
        border: 'ما إذا كان سيتم عرض الحدود',
        borderColor: 'لون الحدود',
        borderWidth: 'عرض الحدود'
      }
    },
    fcTableGrid: {
      name: 'شبكة'
    },
    group: {
      name: 'نموذج فر��ي',
      props: {
        disabled: 'معطل',
        syncDisabled:
          'ما إذا كان سيتم فرض مزامنة حالة التعطيل مع النموذج الفرعي',
        expand: 'تعيين العناصر الافتراضية للتوسيع',
        button: 'ما إذا كان سيتم عرض زر العملية',
        sortBtn: 'ما إذا كان سيتم عرض زر الفرز',
        min: 'تعيين الحد الأدنى لعدد العناصر للإضافة',
        max: 'تعيين الحد الأقصى لعدد العناصر للإضافة'
      }
    },
    html: {
      name: 'HTML',
      props: {
        formCreateNative: 'ما إذا كان سيتم عرض العنوان',
        formCreateTitle: 'العنوان',
        formCreateChild: 'المحتوى'
      }
    },
    input: {
      name: 'إدخال',
      event: {
        change:
          'يتم تشغيله عند تغيير القيمة، عندما يفقد المكون التركيز أو يضغط المستخدم على Enter'
      },
      props: {
        type: 'النوع',
        maxlength: 'الحد الأقصى لطول الإدخال',
        minlength: 'الحد الأدنى لطول الإدخال',
        placeholder: 'نص العنصر النائب',
        clearable: 'ما إذا كان سيتم عرض زر المسح',
        disabled: 'معطل',
        readonly: 'للقراءة فقط'
      }
    },
    inputNumber: {
      name: 'إدخال رقم',
      props: {
        precision: 'دقة قيمة الإدخال',
        min: 'تعيين الحد الأدنى للقيمة المسموح بها للعداد',
        max: 'تعيين الحد الأقصى للقيمة المسموح بها للعداد',
        step: 'الخطوة',
        stepStrictly: 'ما إذا كان يمكن إدخال مضاعفات الخطوة فقط',
        disabled: 'معطل',
        controls: 'ما إذا كان سيتم استخدام أزرار التحكم',
        controlsPosition: 'موضع زر التحكم',
        placeholder: 'نص العنصر النائب'
      }
    },
    password: {
      name: 'كلمة المرور',
      event: {
        change:
          'يتم تشغيله عند تغيير القيمة، عندما يفقد المكون التركيز أو يضغط المستخدم على Enter'
      },
      props: {
        disabled: 'معطل',
        readonly: 'للقراءة فقط',
        maxlength: 'الحد الأقصى لطول الإدخال',
        minlength: 'الحد الأدنى لطول الإدخال',
        placeholder: 'نص العنصر النائب',
        clearable: 'ما إذا كان سيتم عرض زر المسح'
      }
    },
    radio: {
      name: 'راديو',
      props: {
        input: 'ما إذا كان سيتم ملء',
        disabled: 'معطل',
        type: 'النوع',
        textColor: 'لون النص عند تنشيط النموذج الزر',
        fill: 'لون التعبئة ولون الحدود عند تنشيط النموذج الزر'
      }
    },
    rate: {
      name: 'تقييم',
      props: {
        max: 'الحد الأقصى للدرجة',
        disabled: 'معطل',
        allowHalf: 'ما إذا كان سيتم السماح بالتحديد النصفي',
        voidColor: 'لون الأيقونة عند عدم التحديد',
        disabledVoidColor: 'لون الأيقونة عند عدم التحديد عند القراءة فقط',
        voidIconClass: 'اسم فئة الأيقونة عند عدم التحديد',
        disabledVoidIconClass:
          'اسم فئة الأيقونة عند عدم التحديد عند القراءة فقط',
        showScore: 'ما إذا كان سيتم عرض الدرجة الحالية',
        textColor: 'لون النص المساعد',
        scoreTemplate: 'قالب عرض الدرجة'
      }
    },
    select: {
      name: 'تحديد',
      event: {
        removeTag: 'يتم تشغيله عند إزالة العلامة في وضع التحديد المتعدد'
      },
      props: {
        multiple: 'ما إذا كان هناك تحديدات متعددة',
        disabled: 'معطل',
        clearable: 'ما إذا كان يمكن مسح الخيار',
        collapseTags:
          'ما إذا كان سيتم عرض القيمة المحددة كنص أثناء التحديد المتعدد',
        multipleLimit:
          'الحد الأقصى لعدد العناصر التي يمكن للمستخدم تحديدها عند التحديد المتعدد، إذا كان 0، فلا يوجد حد',
        placeholder: 'نص العنصر النائب',
        filterable: 'هل هو قابل للبحث',
        allowCreate: 'ما إذا كان سيتم السماح للمستخدمين بإنشاء إدخالات جديدة',
        noMatchText: 'النص المعروض عند عدم تطابق شروط البحث',
        noDataText: 'النص المعروض عند خلو الخيار',
        reserveKeyword:
          'عند التحديد المتعدد القابل للبحث، ما إذا كان سيتم الاحتفاظ بالكلمة الرئيسية الحالية بعد تحديد خيار',
        defaultFirstOption:
          'اضغط على Enter في مربع الإدخال وحدد العنصر الأول المطابق',
        remote: 'ما إذا كانت الخيارات محملة عن بُعد من الخادم',
        remoteMethod: 'طرق البحث البعيدة المخصصة'
      }
    },
    slider: {
      name: 'شريط التمرير',
      props: {
        min: 'القيمة الدنيا',
        max: 'القيمة القصوى',
        disabled: 'معطل',
        step: 'الخطوة',
        showInput:
          'ما إذا كان سيتم عرض مربع الإدخال، يكون صالحًا فقط أثناء التحديد غير النطاقي',
        showInputControls:
          'ما إذا كان سيتم عرض أزرار التحكم في مربع الإدخال عند عرض مربع الإدخال',
        showStops: 'ما إذا كان سيتم عرض التوقفات',
        range: 'ما إذا كان تحديد النطاق',
        vertical: 'ما إذا كان الوضع الرأسي',
        height: 'ارتفاع شريط التمرير، مطلوب في الوضع الرأسي'
      }
    },
    space: {
      name: 'مساحة',
      props: {
        height: 'الارتفاع'
      }
    },
    subForm: {
      name: 'مجموعة',
      props: {
        disabled: 'معطل',
        syncDisabled:
          'ما إذا كان سيتم فرض مزامنة حالة التعطيل مع النموذج الفرعي'
      }
    },
    switch: {
      name: 'مفتاح',
      props: {
        disabled: 'معطل',
        width: 'العرض (بكسل)',
        activeText: 'وصف النص عند الفتح',
        inactiveText: 'وصف النص عند الإغلاق',
        activeValue: 'القيمة عند الفتح',
        inactiveValue: 'القيمة عند الإغلاق',
        activeColor: 'لون الخلفية عند الفتح',
        inactiveColor: 'لون الخلفية عند الإغلاق'
      }
    },
    tableForm: {
      name: 'نموذج الجدول',
      props: {
        disabled: 'معطل',
        max: 'الحد الأقصى لعدد الصفوف التي يمكن إضافتها، إذا كان 0، فلا يوجد حد'
      }
    },
    tableFormColumn: {
      name: 'عمود نموذج الجدول',
      label: 'عمود نموذج الجدول',
      props: {
        label: 'العنوان',
        width: 'العرض',
        color: 'اللون'
      }
    },
    text: {
      name: 'نص',
      props: {
        formCreateNative: 'ما إذا كان سيتم عرض العنوان',
        formCreateTitle: 'العنوان',
        formCreateChild: 'المحتوى'
      }
    },
    textarea: {
      name: 'منطقة النص',
      event: {
        change:
          'يتم تشغيله عند تغيير القيمة، عندما يفقد المكون التركيز أو يضغط المستخدم على Enter'
      },
      props: {
        disabled: 'معطل',
        readonly: 'للقراءة فقط',
        maxlength: 'الحد الأقصى لطول الإدخال',
        minlength: 'الحد الأدنى لطول الإدخال',
        showWordLimit: 'ما إذا كان سيتم عرض إحصائيات عدد الكلمات',
        placeholder: 'نص العنصر النائب',
        rows: 'عدد صفوف مربع الإدخال',
        autosize: 'ما إذا كان الارتفاع يتكيف تلقائيًا'
      }
    },
    timePicker: {
      name: 'الوقت',
      props: {
        pickerOptions: 'خيارات محددة لمنتقي الوقت والتاريخ الحالي',
        readonly: 'للقراءة فقط',
        disabled: 'معطل',
        editable: 'يمكن إدخال النص في مربع النص',
        clearable: 'ما إذا كان سيتم عرض زر المسح',
        placeholder: 'نص العنصر النائب للتحديد غير النطاقي',
        startPlaceholder: 'نص العنصر النائب لتاريخ البدء عند تحديد النطاق',
        endPlaceholder: 'نص العنصر النائب لتاريخ البدء عند تحديد النطاق',
        isRange: 'ما إذا كان سيتم تحديد نطاق زمني',
        arrowControl: 'ما إذا كان سيتم استخدام الأسهم لتحديد الوقت',
        align: 'المحاذاة'
      }
    },
    tree: {
      name: 'شجرة',
      event: {
        nodeClick: 'يتم تشغيله عند النقر على العقدة',
        nodeContextmenu:
          'سيتم تشغيل هذا الحدث عند النقر بزر الماوس الأيمن على عقدة',
        checkChange: 'يتم تشغيله عند النقر على مربع الاختيار',
        check: 'يتم تشغيله بعد النقر على مربع اختيار العقدة',
        currentChange: 'الحدث الذي يتم تشغيله عند تغيير العقدة المحددة حاليًا',
        nodeExpand: 'الحدث الذي يتم تشغيله عند توسيع العقدة',
        nodeCollapse: 'الحدث الذي يتم تشغيله عند إغلاق العقدة',
        nodeDragStart: 'الحدث الذي يتم تشغيله عند بدء سحب العقدة',
        nodeDragEnter: 'الحدث الذي يتم تشغيله عند السحب إلى عقد أخرى',
        nodeDragLeave: 'الحدث الذي يتم تشغيله عند مغادرة عقدة أثناء السحب',
        nodeDragOver: 'الحدث الذي يتم تشغيله عند سحب عقدة',
        nodeDragEnd: 'الحدث الذي يتم تشغيله عند انتهاء السحب',
        nodeDrop: 'الحدث الذي يتم تشغيله عند اكتمال السحب والإفلات بنجاح'
      },
      props: {
        emptyText: 'النص المعروض عند خلو المحتوى',
        props: 'خيارات',
        renderAfterExpand:
          'ما إذا كان سيتم عرض العقد الفرعية بعد توسيع عقدة الشجرة لأول مرة',
        defaultExpandAll: 'ما إذا كان سيتم توسيع جميع العقد افتراضيًا',
        expandOnClickNode:
          'ما إذا كان سيتم توسيع أو تقليص ال��قدة عند النقر على العقدة، إذا كان false، فسيتم توسيع أو تقليص العقدة فقط عند النقر على رمز السهم.',
        checkOnClickNode: 'ما إذا كان سيتم تحديد العقدة عند النقر على العقدة',
        autoExpandParent:
          'ما إذا كان سيتم توسيع العقدة الأصلية تلقائيًا عند توسيع العقدة الفرعية',
        checkStrictly:
          'عند عرض مربع الاختيار، ما إذا كان يجب اتباع عدم ارتباط الوالدين والأطفال ببعضهم البعض بشكل صارم',
        accordion: 'ما إذا كان سيتم فتح عقدة شجرة واحدة فقط للتوسيع في كل مرة',
        indent: 'المسافة البادئة الأفقية (بكسل) بين العقد ذات المستوى المجاور',
        nodeKey:
          'كل عقدة شجرة تستخدم كخاصية للتعريف الفريد، ويجب أن تكون الشجرة بأكملها فريدة'
      }
    },
    upload: {
      name: 'تحميل',
      info: 'تعيين عنوان URL الذي تم إرجاعه بواسطة الواجهة إلى file.url في طريقة onSuccess',
      event: {
        remove: 'يتم تشغيله عند إزالة ملف من قائمة الملفات'
      },
      props: {
        listType: 'نوع التحميل',
        multiple: 'ما إذا كان يدعم تحديد ملفات متعددة',
        action: 'عنوان التحميل (مطلوب)',
        beforeUpload: 'خطاف قبل تحميل الملف',
        onSuccess: 'استدعاء النجاح عند التحميل',
        headers: 'تعيين رؤوس طلب التحميل',
        data: 'معلمات إضافية مرفقة عند التحميل',
        name: 'اسم حقل الملف المحمل',
        withCredentials: 'دعم إرسال معلومات اعتماد ملفات تعريف الارتباط',
        accept: 'أنواع الملفات المقبولة للتحميل',
        autoUpload: 'ما إذا كان سيتم تحميل الملف فورًا بعد تحديده',
        disabled: 'معطل',
        limit: 'الحد الأقصى لعدد التحميلات المسموح بها'
      }
    }
  }
}
