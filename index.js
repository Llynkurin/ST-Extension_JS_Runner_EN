(function () {
    'use strict';

    const localizationMap = {
        "酒馆助手": "Tavern Helper",
        "扩展已启用": "Extension ON",
        "扩展已禁用": "Extension OFF",
        "主设置": "Main",
        "渲染器": "Renderer",
        "脚本库": "Library",
        "工具箱": "Toolbox",
        "启用扩展": "Enable Extension",
        "扩展总开关": "Master switch for the extension",
        "版本更新": "Version Update",
        "查看最新特性，检查并更新扩展": "Check for new features and update the extension",
        "更新": "Update",
        "开发工具": "Developer Tools",
        "实时监听": "Live Listener",
        "连接 VSCode/Cursor，将代码修改实时同步到酒馆": "Connect to VSCode/Cursor to sync code changes to Tavern in real-time",
        "允许监听": "Allow Listening",
        "启用弹窗报错": "Enable Popup Errors",
        "使用方法": "Usage Guide",
        "刷新间隔 (毫秒)": "Refresh Interval (ms)",
        "编写参考": "Writing Reference",
        "编写脚本的参考文档": "Reference documentation for writing scripts",
        "查看教程及文档": "View Tutorials & Docs",
        "下载参考文件": "Download Reference Files",
        "电脑编写模板用": "For Desktop/IDE",
        "手机或 AI 官网用": "For Mobile/Web AI",
        "酒馆 /STScript": "Tavern /STScript",
        "查看手册": "View Manual",
        "禁用酒馆助手宏": "Disable Tavern Helper Macros",
        "编写变量角色卡而非测试/游玩角色卡时，请打开此开关，避免 {{get_message_variable::变量}} 等宏被替换": "Enable this when writing variable-based character cards to prevent macros like {{get_message_variable::var}} from being replaced.",
        "调试模式": "Debug Mode",
        "开启调试模式，将在控制台输出更多信息": "Enable debug mode to output more information to the console",
        "扩展信息": "Extension Info",
        "作者：KAKAA，青空莉想做舞台少女的狗": "Authors: KAKAA, Qingkong Li wants to be the dog of a stage girl",
        "本扩展免费使用，禁止任何形式的商业用途": "This extension is free to use. Commercial use of any kind is prohibited.",
        "脚本可能存在风险，请确保安全后再运行": "Scripts may carry risks. Please ensure they are safe before running.",
        "About Us": "About Us",
        "启用渲染器": "Enable Renderer",
        "设置需要渲染的楼层数，从最新楼层开始计数。为0时，将渲染所有楼层": "Set the number of messages to render, counting from the latest. Set to 0 to render all messages.",
        "启用后，符合条件的代码块将被渲染": "When enabled, qualifying code blocks will be rendered.",
        "启用代码折叠": "Enable Code Folding",
        "折叠所有代码块，避免正则替换成前端代码时影响阅读": "Folds all code blocks to improve readability when regex replaces them with front-end code.",
        "启用加载动画": "Enable Loading Animation",
        "在前端内字体、图片等资源未加载完成前，显示加载动画而不是显示不完全界面": "Displays a loading animation until resources like fonts and images are fully loaded, preventing an incomplete interface.",
        "启用 Blob URL 渲染": "Enable Blob URL Rendering",
        "使用 Blob URL 渲染前端界面，可能存在样式问题且某些国产浏览器不可用，但更方便 f12 开发者工具调试": "Uses Blob URL to render the front-end interface. May have style issues and not work on some browsers, but is easier to debug with F12 developer tools.",
        "渲染深度": "Render Depth",
        "设置需要渲染的楼层数，从最新楼层开始计数。为0时，将所有楼层渲染": "Set the number of messages to render, counting from the latest. Set to 0 to render all messages.",
        "+ 脚本": "+ Script",
        "+ 文件夹": "+ Folder",
        "导入": "Import",
        "内置库": "Built-in Library",
        "全局脚本库": "Global Script Library",
        "应用于酒馆所有聊天": "Applies to all chats in Tavern",
        "暂无脚本": "No scripts yet",
        "角色脚本库": "Character Script Library",
        "应用于当前角色卡": "Applies to the current character card",
        "删除": "Delete",
        "导出": "Export",
        "移动到文件夹": "Move to Folder",
        "退出": "Cancel",
        "变量管理器": "Variable Manager",
        "管理和编辑所有类型的变量": "Manage and edit all types of variables",
        "打开": "Open",
        "提示词查看器": "Prompt Viewer",
        "查看提示词发送情况": "View the status of sent prompts",
        "播放器": "Player",
        "扩展内置的全局音频播放器": "The extension's built-in global audio player",
        "音乐": "Music",
        "音效": "Sound FX",
        "淡入淡出时间(秒)": "Fade In/Out Time (s)",
        "刷新播放列表": "Refresh Playlist",
        "新建脚本到:": "Create new script in:",
        "确认": "Confirm",
        "取消": "Cancel",
        "创建新文件夹": "Create New Folder",
        "文件夹名称:": "Folder Name:",
        "请输入文件夹名称": "Enter folder name",
        "文件夹图标:": "Folder Icon:",
        "选择颜色": "Select Color",
        "选择图标": "Select Icon",
        "点击选择图标": "Click to select icon",
        "目标位置:": "Target Location:",
        "创建": "Create",
        "标签化: 随世界书、预设或链接配置自动开关正则、提示词条目": "Tagging: Auto-toggle regex/prompts with world info, presets, or links",
        "预设防误触": "Preset Misfire Prevention",
        "世界书强制自定义排序": "Force Custom Sorting for World Info",
        "世界书强制用推荐的全局设置": "Force Recommended Global Settings for World Info",
        "预设条目更多按钮: 一键新增预设条目": "More Preset Entries: One-click add new preset entries",
        "自动开启角色卡局部正则": "Auto-enable Local Regex for Character Cards",
        "折叠/展开内容": "Collapse/Expand Content",
        "关闭": "Close",
        "全局": "Global",
        "角色": "Character",
        "聊天": "Chat",
        "消息楼层": "Message",
        "筛选变量类型": "Filter variable types",
        "搜索变量...": "Search variables...",
        "新建": "New",
        "清空": "Clear All",
        "字符串": "String",
        "对象": "Object",
        "数组": "Array",
        "数字": "Number",
        "布尔值": "Boolean",
        "最小": "Min",
        "最大": "Max",
        "楼": "",
        "最大楼层不能小于最小楼层": "Max message cannot be less than min message",
        "创建默认脚本成功": "Default script created successfully",
        "正在加载默认脚本...": "Loading default scripts...",
        "搜索脚本...": "Search scripts..."
    };

    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const trimmedText = node.nodeValue.trim();
            if (trimmedText && localizationMap[trimmedText]) {
                node.nodeValue = node.nodeValue.replace(trimmedText, localizationMap[trimmedText]);
            }
        }
    }

    function runLocalization() {
        const selectors = [
            'b', 'small', 'label', 'a', 'span', 'h3', 'h4', 'div.info-text > div',
            '#extension-status', '.settings-title', '.settings-title-text',
            '.settings-title-description', '.TavernHelper-button', '.major-divider-text',
            '.text-decoration', '.dialog-title', '.script-item-name', '.tab-item-text',
            '.popup-button-ok', '.popup-button-cancel', '.form-span', '.filter-option > label',
            '.floor-filter-error', '.toast-message'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.childNodes.forEach(child => {
                    translateNode(child);
                });
            });
        });

        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(element => {
            const placeholderText = element.getAttribute('placeholder');
            if (placeholderText && localizationMap[placeholderText]) {
                element.setAttribute('placeholder', localizationMap[placeholderText]);
            }
        });

        document.querySelectorAll('[title]').forEach(element => {
            const titleText = element.getAttribute('title');
            if (titleText && localizationMap[titleText]) {
                element.setAttribute('title', localizationMap[titleText]);
            }
        });
    }

    const observer = new MutationObserver(runLocalization);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    runLocalization();

})();
