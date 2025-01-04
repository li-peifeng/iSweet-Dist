import{cf as t}from"./index-c275bac5.js";const r="备份",_="恢复",i="开始备份",a="备份完成",n="[ {{item}} ] 备份成功",d="[ {{item}} ] 备份失败",c="未选择文件",p="开始恢复",l="恢复完成",u="[ {{item}} ] 恢复成功",m="[ {{item}} ] 恢复失败",h="覆盖",f="如不需要加密请留空",g="加密密码",k="密码错误",b={backup:r,restore:_,start_backup:i,finish_backup:a,success_backup_item:n,failed_backup_item:d,no_file:c,start_restore:p,finish_restore:l,success_restore_item:u,failed_restore_item:m,override:h,encrypt_password_placeholder:f,encrypt_password:g,wrong_encrypt_password:k},y={download_concurrency:"下载并发","download_concurrency-tips":"需要启用代理",download_part_size:"下载分片大小","download_part_size-tips":"需要启用代理。单位：KB",paths:"路径",protect_same_name:"保护同名","protect_same_name-tips":"保护同名的文件不被删除或重命名",writable:"可写"},w={internal_upload:"内部上传",order_by:"排序",order_bys:{created_at:"创建时间",name:"名称",size:"大小",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒传",refresh_token:"刷新令牌",root_folder_id:"根文件夹ID"},v={client_id:"客户端ID","client_id-tips":"如果你没有，请留空",client_secret:"客户端密钥","client_secret-tips":"如果你没有，请留空",drive_type:"云盘类型",drive_types:{backup:"备份盘",default:"默认",resource:"资源库"},internal_upload:"内部上传","internal_upload-tips":"如果您在使用位于北京的阿里云服务器，您可以开启它来提高上传速度",livp_download_format:"Livp 下载格式",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth令牌链接",order_by:"排序",order_bys:{created_at:"创建时间",name:"名称",size:"大小",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒传","rapid_upload-tips":"如果您启用此选项，文件将先上传到服务器，所以进度将不正确",refresh_token:"刷新令牌",remove_way:"移除方式",remove_ways:{delete:"删除",trash:"回收站"},root_folder_id:"根文件夹ID"},x={order_by:"排序",order_bys:{created_at:"创建时间",name:"名称",size:"大小",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},refresh_token:"刷新令牌",root_folder_id:"根文件夹ID",share_id:"分享ID",share_pwd:"分享密码"},P={client_id:"客户端ID",client_secret:"客户端密钥",custom_crack_ua:"自定义破解ua",custom_upload_part_size:"自定义上传分片大小","custom_upload_part_size-tips":"0 表示根据VIP等级对应大小",download_api:"下载接口",download_apis:{crack:"非官方",crack_video:"非官方视频接口",official:"官方"},low_bandwith_upload_mode:"低带宽上传模式",only_list_video_file:"只显示视频目录",order_by:"排序",order_bys:{name:"名称",size:"大小",time:"时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_path:"根文件夹路径",upload_api:"上传 api",upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32"},S={album_id:"相簿ID",cookie:"Cookie",delete_origin:"删除源文件",show_type:"展示类型",show_types:{root:"根",root_only_album:"仅根目录下相簿",root_only_file:"仅根目录下文件"},upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32"},D={BDUSS:"BDUSS",pwd:"百度网盘分享密码",root_folder_path:"根文件夹路径",surl:"百度网盘分享链接"},T={bbsid:"Bbsid",cookie:"Cookie",password:"密码",root_folder_id:"根文件夹ID",user_name:"用户名"},I={address:"地址",cookie:"Cookie",custom_ua:"自定义UA",enable_thumb_and_folder_size:"启用缩略图和文件夹大小",password:"密码",root_folder_path:"根文件夹路径",username:"用户名"},A={directory_name_encryption:"文件夹名称加密",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"加密后缀","encrypted_suffix-tips":"高级选项！加密的文件将使用此后缀",filename_encoding:"文件名编码","filename_encoding-tips":"高级选项",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"文件名加密",filename_encryptions:{obfuscate:"混淆",off:"关闭",standard:"标准"},password:"密码","password-tips":"主密码",remote_path:"加密后文件存储路径","remote_path-tips":"这是加密数据存储的位置",salt:"加盐","salt-tips":"如果您不知道什么是加盐，可以视为第二个密码。可选，推荐。",show_hidden:"显示隐藏","show_hidden-tips":"显示隐藏目录以及文件",thumbnail:"缩略图","thumbnail-tips":"启用在缩略图文件夹下预先生成的缩略图"},C={access_key_id:"访问密钥 Id",add_filename_to_disposition:"添加filename到disposition","add_filename_to_disposition-tips":"添加filename到Content-Disposition头中。",bucket:"存储桶",custom_host:"自定义HOST",enable_custom_host_presign:"启用自定义HOST签名",endpoint:"Endpoint",force_path_style:"强制路径样式",list_object_version:"列出对象版本",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"占位文件名",region:"地区",remove_bucket:"移除bucket","remove_bucket-tips":"使用自定义主机时从路径中删除bucket名称。",root_folder_path:"根文件夹路径",secret_access_key:"安全访问密钥",session_token:"会话令牌",sign_url_expire:"签名链接有效期"},z={cookie:"Cookie",root_folder_id:"根文件夹ID",upload_thread:"上传线程"},L={client_id:"客户端ID","client_id-tips":"如果你没有，请留空",client_secret:"客户端密钥","client_secret-tips":"如果你没有，请留空",oauth_token_url:"Oauth令牌链接",refresh_token:"刷新令牌",root_folder_path:"根文件夹路径"},B={address:"地址",encoding:"编码",password:"密码",root_folder_path:"根文件夹路径",username:"用户名"},O={client_id:"客户端ID",client_secret:"客户端密钥",page_size:"分页大小","page_size-tips":"FebBox 驱动程序每页的列表大小",root_folder_id:"根文件夹ID",sort_rule:"排序规则",sort_rules:{ext_asc:"扩展名正序",ext_desc:"扩展名倒序",name_asc:"名称升序",name_desc:"名称降序",size_asc:"大小升序",size_desc:"大小降序",update_asc:"修改时间正序",update_desc:"修改时间倒序"},user_ip:"用户ip","user_ip-tips":"用户IP地址用于下载链接，可以加快下载"},F={ip:"IP",password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},U={chunk_size:"分片大小","chunk_size-tips":"上传分块大小 (单位: MB)",client_id:"客户端ID",client_secret:"客户端密钥",order_by:"排序","order_by-tips":"例如: folder,name,modifiedTime",order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_id:"根文件夹ID"},M={client_id:"客户端ID",client_secret:"客户端密钥",refresh_token:"刷新令牌",root_folder_id:"根文件夹ID",show_archive:"显示归档"},q={app_id:"App ID",app_secret:`App Secret
`,app_version:"应用版本",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌,此为必填项",root_folder_path:"根文件夹路径",upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32"},V={ip:"IP",password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},j={address:"地址",password:"密码",root_folder_path:"根文件夹路径",username:"用户名"},G={account:"账户",baseUrl:"基本URL","baseUrl-tips":"进行文件操作的基础 URL",cookie:"Cookie","cookie-tips":"有效期约为15天，若使用分享链接则忽略",password:"密码",repair_file_info:"修复文件信息","repair_file_info-tips":"要使用 WebDAV，您需要启用它",root_folder_id:"根文件夹ID",shareUrl:"分享链接","shareUrl-tips":"用于获取分享页面",share_password:"分享密码",type:"类型",types:{account:"账户",cookie:"Cookie",url:"链接"},user_agent:"用户代理"},E={app_id:"App ID","app_id-tips":"App ID",app_secret:`App Secret
`,"app_secret-tips":"App Secret",external_mode:"外部预览模式","external_mode-tips":"打开后复制飞书链接，可跳转到飞书网页预览",root_folder_path:"根文件夹路径",tenant_url_prefix:"租户网址前缀","tenant_url_prefix-tips":"租户地址前缀"},H={host:"主机地址","host-tips":"你可以将它更改为你的局域网地址",root_folder_path:"根文件夹路径",share_id:"分享ID","share_id-tips":"最后一个/共享链接后的部分",share_pwd:"分享密码","share_pwd-tips":"分享链接的密码"},R={mkdir_perm:"创建文件夹权限",recycle_bin_path:"回收站路径","recycle_bin_path-tips":"回收站的路径，如果空或保留“永久删除”则永久删除",root_folder_path:"根文件夹路径",show_hidden:"显示隐藏","show_hidden-tips":"显示隐藏目录以及文件",thumb_cache_folder:"缩略图缓存文件夹",thumb_concurrency:"缩略图并发数","thumb_concurrency-tips":"同时生成缩略图的数量。这控制了可以并行生成多少缩略图。",thumbnail:"缩略图","thumbnail-tips":"启用缩略图",video_thumb_pos:"视频缩略图","video_thumb_pos-tips":"视频缩略图的位置。如果该值是一个数字(整数点浮点)，它代表几秒钟的时间。 如果值以“%”结尾，则代表视频持续时间的百分比。"},W={access_token:"访问令牌",order_by:"排序",order_bys:{size:"大小",title:"名称",updated_at:"修改时间"},order_desc:"降序排列",project_id:"项目 ID",root_folder_id:"根文件夹ID"},N={email:"邮箱",password:"密码",two_fa_code:"两步验证代码","two_fa_code-tips":"2FA 6位数字代码，仅填写2FA 代码将不支持重载驱动程序",two_fa_secret:"两步验证秘钥","two_fa_secret-tips":"双因素身份验证秘钥"},Q={access_token:"访问令牌",endpoint:"Endpoint",root_folder_path:"根文件夹路径"},X={cloud_id:"Cloud id",device_info:"设备信息",order_by:"排序",order_bys:{filename:"文件名",filesize:"文件大小",lastOpTime:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},password:"密码",phone:"手机号码",root_folder_id:"根文件夹ID",sms_code:"短信验证码","sms_code-tips":"输入 'send' 发送短信",upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32"},Y={cookie:"Cookie",song_limit:"歌曲获取上限","song_limit-tips":"默认只获取 200 首歌曲"},K={chunk_size:"分片大小",client_id:"客户端ID",client_secret:"客户端密钥",custom_host:"自定义HOST","custom_host-tips":"自定义加速下载链接",is_sharepoint:"是否Sharepoint",redirect_uri:"重定向 Uri",refresh_token:"刷新令牌",region:"地区",regions:{cn:"世纪互联",de:"德国版",global:"全局",us:"美国版"},root_folder_path:"根文件夹路径",site_id:"站点ID"},$={chunk_size:"分片大小",client_id:"客户端ID",client_secret:"客户端密钥",custom_host:"自定义HOST","custom_host-tips":"自定义加速下载链接",email:"邮箱",region:"地区",regions:{cn:"世纪互联",de:"德国版",global:"全局",us:"美国版"},root_folder_path:"根文件夹路径",tenant_id:"租户 ID"},Z={captcha_token:"验证码",custom_low_latency_address:"自定义低延迟地址",device_id:"设备ID",disable_media_link:"禁用媒体链接",password:"密码",platform:"平台",platforms:{android:"安卓",pc:"Pc平台",web:"网页"},refresh_token:"刷新令牌",root_folder_id:"根文件夹ID",use_low_latency_address:"使用低延迟地址",username:"用户名"},J={custom_low_latency_address:"自定义低延迟地址",device_id:"设备ID",platform:"平台",platforms:{android:"安卓",pc:"Pc平台",web:"网页"},root_folder_id:"根文件夹ID",share_id:"分享ID",share_pwd:"分享密码",use_low_latency_address:"使用低延迟地址",use_transcoding_address:"使用转码地址"},ee={cookie:"Cookie",order_by:"排序",order_bys:{file_name:"文件名称",file_type:"文件类型",none:"无",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夹ID"},oe={device_id:"设备id",query_token:"查询令牌","query_token-tips":"不要编辑",refresh_token:"刷新令牌",root_folder_id:"根文件夹ID"},se={cdn:"CDN","cdn-tips":"如果您启用此选项，下载速度可以提高，但将会有一些性能损失",cookie:"Cookie","cookie-tips":"Cookie 可以同时用于多个客户端",password:"密码",phone:"手机号码",root_folder_id:"根文件夹ID"},te={access_key_id:"访问密钥 Id",add_filename_to_disposition:"添加filename到disposition","add_filename_to_disposition-tips":"添加filename到Content-Disposition头中。",bucket:"存储桶",custom_host:"自定义HOST",enable_custom_host_presign:"启用自定义主机预签名",endpoint:"Endpoint",force_path_style:"强制路径样式",list_object_version:"列出对象版本",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"占位文件名",region:"地区",remove_bucket:"移除bucket","remove_bucket-tips":"使用自定义主机时从路径中删除bucket名称。",root_folder_path:"根文件夹路径",secret_access_key:"安全访问密钥",session_token:"会话令牌",sign_url_expire:"签名链接有效期"},re={address:"地址",ignore_symlink_error:"忽略软链接错误",passphrase:"密语",password:"密码",private_key:"私钥",root_folder_path:"根文件夹路径",username:"用户名"},_e={address:"地址",password:"密码",root_folder_path:"根文件夹路径",share_name:"分享名称",username:"用户名"},ie={address:"地址",password:"密码",repoId:"RepoId",repoPwd:"仓库密码",root_folder_path:"根文件夹路径",token:"令牌",username:"用户名"},ae={cookie:"Cookie",order_by:"排序",order_bys:{created:"创建时间",fileName:"文件名",fileSize:"文件大小",updated:"修改时间"},order_direction:"排序方式",order_directions:{Asc:"升序",Desc:"降序"},project_id:"项目 ID",region:"地区",regions:{china:"中国",international:"国际版"},root_folder_id:"根文件夹ID",use_s3_upload_method:"使用 s3 上传方法"},ne={cookie:"Cookie",download_api:"下载接口",download_apis:{crack:"非官方",official:"官方"},order_by:"排序",order_bys:{name:"名称",size:"大小",time:"时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_path:"根文件夹路径"},de={captcha_token:"验证码",credit_key:"信用密钥","credit_key-tips":"信用密钥，用于登录",device_id:"设备id",password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},ce={captcha_token:"验证码",password:"密码",remove_way:"移除方式",remove_ways:{delete:"删除",trash:"回收站"},root_folder_id:"根文件夹ID",safe_password:"安全密码",use_video_url:"使用视频url",username:"用户名"},pe={algorithms:"算法","algorithms-tips":"签名类型是用户名,此为必填项",captcha_sign:"验证码签名","captcha_sign-tips":"签名类型是验证码签名,此为必填项",captcha_token:"验证码",client_id:"客户端ID",client_secret:"客户端密钥",client_version:"客户端版本",credit_key:"信用密钥","credit_key-tips":"信用密钥，用于登录",device_id:"设备id",download_user_agent:"下载用户代理",login_type:"登录类型",login_types:{refresh_token:"刷新令牌",user:"用户名"},package_name:"包名",password:"密码","password-tips":"登录类型是用户名,此为必填项",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌,此为必填项",remove_way:"移除方式",remove_ways:{delete:"删除",trash:"回收站"},root_folder_id:"根文件夹ID",safe_password:"安全密码","safe_password-tips":"超安全密码",sign_type:"签名类型",sign_types:{algorithms:"算法",captcha_sign:"验证码签名"},timestamp:"时间戳","timestamp-tips":"签名类型是验证码签名,此为必填项",use_video_url:"使用视频url",user_agent:"用户代理",username:"用户名","username-tips":"登录类型是用户名,此为必填项"},le={algorithms:"算法","algorithms-tips":"签名类型是用户名,此为必填项",captcha_sign:"验证码签名","captcha_sign-tips":"签名类型是验证码签名,此为必填项",captcha_token:"验证码",client_id:"客户端ID",client_secret:"客户端密钥",client_version:"客户端版本",credit_key:"信用密钥","credit_key-tips":"信用密钥，用于登录",device_id:"设备id",download_user_agent:"下载用户代理",login_type:"登录类型",login_types:{refresh_token:"刷新令牌",user:"用户名"},package_name:"包名",password:"密码","password-tips":"登录类型是用户名,此为必填项",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌,此为必填项",root_folder_id:"根文件夹ID",sign_type:"签名类型",sign_types:{algorithms:"算法",captcha_sign:"验证码签名"},timestamp:"时间戳","timestamp-tips":"签名类型是验证码签名,此为必填项",use_video_url:"使用视频url",user_agent:"用户代理",username:"用户名","username-tips":"登录类型是用户名,此为必填项"},ue={captcha_token:"验证码",password:"密码",root_folder_id:"根文件夹ID",use_video_url:"使用视频url",username:"用户名"},me={algorithms:"算法","algorithms-tips":"签名类型是用户名,此为必填项",captcha_sign:"验证码签名","captcha_sign-tips":"签名类型是验证码签名,此为必填项",captcha_token:"验证码",client_id:"客户端ID",client_secret:"客户端密钥",client_version:"客户端版本",credit_key:"信用密钥","credit_key-tips":"信用密钥，用于登录",device_id:"设备id",download_user_agent:"下载用户代理",login_type:"登录类型",login_types:{refresh_token:"刷新令牌",user:"用户名"},package_name:"包名",password:"密码","password-tips":"登录类型是用户名,此为必填项",refresh_token:"刷新令牌","refresh_token-tips":"登录类型是刷新令牌,此为必填项",root_folder_id:"根文件夹ID",sign_type:"签名类型",sign_types:{algorithms:"算法",captcha_sign:"验证码签名"},timestamp:"时间戳","timestamp-tips":"签名类型是验证码签名,此为必填项",use_video_url:"使用视频url",user_agent:"用户代理",username:"用户名","username-tips":"登录类型是用户名,此为必填项"},he={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"根文件夹ID"},fe={cookie:"Cookie",order_by:"排序",order_bys:{file_name:"文件名称",file_type:"文件类型",none:"无",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夹ID"},ge={device_id:"设备id",query_token:"查询令牌","query_token-tips":"不要编辑",refresh_token:"刷新令牌",root_folder_id:"根文件夹ID"},ke={anti_theft_chain_token:"反盗链令牌",bucket:"存储桶",endpoint:"Endpoint",operator_name:"操作员名称",operator_password:"操作员密码",root_folder_path:"根文件夹路径",sign_url_expire:"签名链接有效期"},be={head_size:"Head 大小","head_size-tips":"使用HEAD方法获取文件大小，但可能失败。",url_structure:"Url 结构","url_structure-tips":`结构:
FolderName:
  [FileName:][FileSize:][Modified:]Url`,writable:"可写"},ye={cookie:"Cookie",order_by:"排序",order_bys:{CreatTime:"创建时间",Name:"名称",Size:"大小",UpdateTime:"修改时间"},order_direction:"排序方式",order_directions:{Asc:"升序",Desc:"降序"},root_folder_id:"根文件夹ID",tf_uid:"Tf uid"},we={max_file_size:"最大文件大小",min_file_size:"最小文件大小",num_file:"文件数量",num_folder:"文件夹数量",root_folder_path:"根文件夹路径"},ve={address:"地址",password:"密码",root_folder_path:"根文件夹路径",tls_insecure_skip_verify:"跳过SSL证书验证",username:"用户名",vendor:"供应商",vendors:{other:"其他",sharepoint:"Sharepoint"}},xe={cookies:"Cookie",order_by:"排序",order_bys:{name:"名称",size:"大小",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夹ID",upload_thread:"上传线程","upload_thread-tips":"4<=线程<=32"},Pe={access_token:"访问令牌",family_id:"Family id","family_id-tips":"如果您想要使用您的个人空间，请保持为空",refresh_token:"刷新令牌",root_folder_id:"根文件夹ID",sort_rule:"排序规则",sort_rules:{name_asc:"名称升序",name_desc:"名称降序",size_asc:"大小升序",size_desc:"大小降序",time_asc:"时间升序",time_desc:"时间降序"}},Se={client_id:"客户端ID",client_secret:"客户端密钥",order_by:"排序",order_bys:{created:"创建时间",modified:"修改时间",name:"名称",path:"路径",size:"大小"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_path:"根文件夹路径"},De={"115 Cloud":{},"115 Open":{},"115 Share":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"如果此驱动无法工作，你可以尝试使用“天翼网盘客户端”驱动。"},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`在这个驱动中可能有一个死循环的错误。
已废弃，不再维护，并将在未来的版本中删除。
我们建议使用官方驱动的 阿里云盘Open。`},AliyundriveOpen:{},AliyundriveShare:{},"Azure Blob Storage":{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},ChaoXingGroupDrive:{},Cloudreve:{},Crypt:{},Doge:{},Doubao:{},Dropbox:{},FTP:{},FebBox:{},FeijiPan:{},"GitHub API":{},"GitHub Releases":{},GoogleDrive:{},GooglePhoto:{},HalalCloud:{},ILanZou:{},"IPFS API":{},KodBox:{},Lanzou:{},Lark:{},LenovoNasShare:{},Local:{},MediaTrack:{},Mega_nz:{},Misskey:{},MoPan:{alert:"这个网盘可能将您的密码以明文存储，请小心设置您的密码"},NeteaseMusic:{},Onedrive:{},"Onedrive Sharelink":{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},QuarkTV:{},Quqi:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderBrowser:{},ThunderBrowserExpert:{},ThunderExpert:{},ThunderX:{},ThunderXExpert:{},Trainbit:{},UC:{},UCTV:{},USS:{},UrlTree:{},VTencent:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},Te={"115 Cloud":"115 网盘","115 Open":"115 开放平台","115 Share":"115 云盘分享","123Pan":"123云盘","123PanLink":"123云盘直链","123PanShare":"123云盘分享","139Yun":"中国移动云盘","189Cloud":"天翼云盘","189CloudPC":"天翼云盘客户端","AList V2":"AList V2","AList V3":"AList V3",Alias:"别名",Aliyundrive:"阿里云盘",AliyundriveOpen:"阿里云盘Open",AliyundriveShare:"阿里云盘分享","Azure Blob Storage":"Azure Blob Storage",BaiduNetdisk:"百度网盘",BaiduPhoto:"一刻相册",BaiduShare:"百度分享",ChaoXingGroupDrive:"超星小组盘",Cloudreve:"Cloudreve",Crypt:"Crypt",Doge:"多吉云",Doubao:"豆包",Dropbox:"Dropbox",FTP:"FTP",FebBox:"FebBox",FeijiPan:"飞机盘","GitHub API":"GitHub API","GitHub Releases":"GitHub 发行",GoogleDrive:"谷歌云盘",GooglePhoto:"谷歌相册",HalalCloud:"HalalCloud",ILanZou:"蓝奏云优享版","IPFS API":"IPFS API",KodBox:"可道云",Lanzou:"蓝奏云",Lark:"Lark (飞书)",LenovoNasShare:"联想家庭储存链接分享",Local:"本机存储",MediaTrack:"分秒帧",Mega_nz:"Mega 网盘",Misskey:"Misskey",MoPan:"魔盘",NeteaseMusic:"网易云音乐",Onedrive:"Onedrive","Onedrive Sharelink":"Onedrive 分享链接",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPak分享",Quark:"夸克",QuarkTV:"夸克TV",Quqi:"曲奇云盘",S3:"对象存储",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition网盘",Terabox:"Terabox",Thunder:"迅雷",ThunderBrowser:"Thunder浏览器",ThunderBrowserExpert:"Thunder浏览器专家",ThunderExpert:"迅雷专家版",ThunderX:"迅雷X",ThunderXExpert:"迅雷X专家版",Trainbit:"Trainbit",UC:"UC",UCTV:"UC TV",USS:"又拍云存储",UrlTree:"地址树",VTencent:"腾讯智能创作平台",Virtual:"虚拟存储",WebDav:"WebDav",WeiYun:"腾讯微云",WoPan:"联通云盘",YandexDisk:"Yandex网盘"},Ie={"115 Cloud":{cookie:"Cookie","cookie-tips":"需要 QR 代码令牌和 cookie 中的一个",limit_rate:"限制速率","limit_rate-tips":"限制所有 api 请求率 ([limit]r/1s)",page_size:"分页大小","page_size-tips":"115 驱动程序的列表 API 的每页大小",qrcode_source:"Qrcode 源","qrcode_source-tips":"选择二维码设备，默认 linux",qrcode_sources:{alipaymini:"支付宝mini",android:"安卓",ios:"IOS",qandroid:"Qandroid",tv:"Tv",web:"网页",wechatmini:"微信mini"},qrcode_token:"二维码令牌","qrcode_token-tips":"需要 QR 代码令牌和 cookie 中的一个",root_folder_id:"根文件夹ID"},"115 Open":{order_by:"排序",order_bys:{file_name:"名称",file_size:"大小",file_type:"类型",user_utime:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},refresh_token:"刷新令牌",root_folder_id:"根文件夹ID"},"115 Share":{cookie:"Cookie","cookie-tips":"需要 QR 代码令牌和 cookie 中的一个",limit_rate:"限制速率","limit_rate-tips":"限制所有 api 请求速率(1r/[limit_rate]s)",page_size:"分页大小","page_size-tips":"115 驱动程序的列表 API 的每页大小",qrcode_source:"Qrcode 源","qrcode_source-tips":"选择二维码设备，默认 linux",qrcode_sources:{alipaymini:"支付宝mini",android:"安卓",ios:"IOS",qandroid:"Qandroid",tv:"Tv",web:"网页",wechatmini:"微信mini"},qrcode_token:"二维码令牌","qrcode_token-tips":"需要 QR 代码令牌和 cookie 中的一个",receive_code:"提取码","receive_code-tips":"115 分享链接提取码",root_folder_id:"根文件夹ID",share_code:"分享码","share_code-tips":"分享链接的分享码"},"123Pan":{password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},"123PanLink":{origin_urls:"原始链接","origin_urls-tips":`结构:
FolderName:
  [FileSize:][Modified:]Url`,private_key:"私钥",uid:"账号 Uid",valid_duration:"有效时长","valid_duration-tips":"分钟"},"123PanShare":{accesstoken:"访问令牌",root_folder_id:"根文件夹ID",sharekey:"分享key",sharepassword:"分享密码"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",custom_upload_part_size:"自定义上传分片大小","custom_upload_part_size-tips":"0 为自动设置",report_real_size:"报告真实大小","report_real_size-tips":"启用上传过程中报告实际文件大小",root_folder_id:"根文件夹ID",type:"类型",types:{family:"家庭云",group:"集团云",personal:"个人云",personal_new:"新的个人盘"}},"189Cloud":{cookie:"Cookie","cookie-tips":"如需输入验证码，请填写Cookie。",password:"密码",root_folder_id:"根文件夹ID",username:"用户名"},"189CloudPC":{family_id:"Family id",family_transfer:"家庭转移",no_use_ocr:"不使用OCR",order_by:"排序",order_bys:{filename:"文件名",filesize:"文件大小",lastOpTime:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},password:"密码",rapid_upload:"秒传",root_folder_id:"根文件夹ID",type:"类型",types:{family:"家庭云",personal:"个人云"},upload_method:"上传方式",upload_methods:{old:"旧版",rapid:"秒传",stream:"流式"},upload_thread:"上传线程","upload_thread-tips":"1<=线程<=32",username:"用户名",validate_code:"验证码"},"AList V2":{access_token:"访问令牌",password:"密码",root_folder_path:"根文件夹路径",url:"链接"},"AList V3":{forward_archive_requests:"转发解压请求",meta_password:"元信息密码",pass_ua_to_upsteam:"传递UA至上游",password:"密码",root_folder_path:"根文件夹路径",token:"令牌",url:"链接",username:"用户名"},Alias:y,Aliyundrive:w,AliyundriveOpen:v,AliyundriveShare:x,"Azure Blob Storage":{access_key:"访问密钥","access_key-tips":"Azure 存储的访问密钥，用于身份验证。https://learn.microsoft.com/azure/storage/common/storage-account-keys-manage",container_name:"容器名称","container_name-tips":"Azure 存储中的容器名称（在 Azure 门户中创建）。https://learn.microsoft.com/azure/storage/blobs/blob-containers-portal",endpoint:"端点","endpoint-tips":"例如 https://accountname.blob.core.windows.net/。Azure 存储的完整端点 URL，包括唯一的存储帐户名称（仅限 3 至 24 个数字和小写字母）。",sign_url_expire:"签名链接有效期","sign_url_expire-tips":"SAS URL 的过期时间（以小时为单位）。"},BaiduNetdisk:P,BaiduPhoto:S,BaiduShare:D,ChaoXingGroupDrive:T,Cloudreve:I,Crypt:A,Doge:C,Doubao:z,Dropbox:L,FTP:B,FebBox:O,FeijiPan:F,"GitHub API":{author_email:"提交作者电子邮件",author_name:"提交作者姓名",committer_email:"提交者电子邮件",committer_name:"提交者名称",copy_commit_message:"复制操作提交消息",delete_commit_message:"删除操作提交消息",gh_proxy:"Gh 代理","gh_proxy-tips":"GitHub 代理, 例如: https://ghproxy.net/raw.githubusercontent.com 或者 https://gh-proxy.com/raw.githubusercontent.com",gpg_key_passphrase:"GPG 密钥密码",gpg_private_key:"GPG 私人密钥",mkdir_commit_message:"创建文件夹操作提交消息",move_commit_message:"移动操作提交消息",owner:"所有者",put_commit_message:"上传操作提交消息",ref:"Ref","ref-tips":"分支名、标签或提交 SHA，不填写使用默认主分支。",rename_commit_message:"重命名操作提交消息",repo:"仓库",root_folder_path:"根文件夹路径",token:"令牌"},"GitHub Releases":{gh_proxy:"Gh 代理","gh_proxy-tips":"GitHub 代理, 例如: https://ghproxy.net/github.com 或 https://gh-proxy.com/github.com ",repo_structure:"仓库结构","repo_structure-tips":"结构：[路径：]org/repo",root_folder_id:"根文件夹ID",show_all_version:"显示所有版本","show_all_version-tips":"显示所有版本",show_readme:"显示阅读次数","show_readme-tips":"显示 READMEC 文件，LICENSE 文件",token:"令牌","token-tips":"GitHub 令牌，如果您想要访问私有仓库或提高费率限制"},GoogleDrive:U,GooglePhoto:M,HalalCloud:q,ILanZou:V,"IPFS API":{endpoint:"Endpoint",gateway:"网关",mode:"模式",modes:{ipfs:"IPFS",ipns:"IPNS",mfs:"MFS"},root_folder_path:"根文件夹路径"},KodBox:j,Lanzou:G,Lark:E,LenovoNasShare:H,Local:R,MediaTrack:W,Mega_nz:N,Misskey:Q,MoPan:X,NeteaseMusic:Y,Onedrive:K,"Onedrive Sharelink":{password:"密码",root_folder_path:"根文件夹路径",url:"链接"},OnedriveAPP:$,PikPak:Z,PikPakShare:J,Quark:ee,QuarkTV:oe,Quqi:se,S3:te,SFTP:re,SMB:_e,Seafile:ie,Teambition:ae,Terabox:ne,Thunder:de,ThunderBrowser:ce,ThunderBrowserExpert:pe,ThunderExpert:le,ThunderX:ue,ThunderXExpert:me,Trainbit:he,UC:fe,UCTV:ge,USS:ke,UrlTree:be,VTencent:ye,Virtual:we,WebDav:ve,WeiYun:xe,WoPan:Pe,YandexDisk:Se,config:De,drivers:Te},Ae="刷新",Ce="添加",ze="编辑",Le="保存",Be="更新",Oe="已复制",Fe="删除成功!",Ue="保存成功",Me="更新成功",qe="选择",Ve="确认",je="取消",Ge="确认要删除 [{{name}}] 吗？",Ee="操作",He="是",Re="否",We="清除",Ne="选择文件夹",Qe="选择文件夹或输入路径",Xe="禁用",Ye="启用",Ke="确定",$e="返回",Ze="已有账号？",Je="转到登录",eo="关闭",oo="暂不支持",so="请输入",to="名称",ro={refresh:Ae,add:Ce,edit:ze,delete:"删除",save:Le,update:Be,copied:Oe,delete_success:Fe,save_success:Ue,update_success:Me,choose:qe,confirm:Ve,cancel:je,delete_confirm:Ge,operations:Ee,yes:He,no:Re,clear:We,choose_folder:Ne,choose_or_input_path:Qe,disable:Xe,enable:Ye,ok:Ke,back:$e,have_account:Ze,go_login:Je,close:eo,no_support_now:oo,empty_input:so,name:to},_o={name:"名称",size:"大小",modified:"修改时间"},io={download:"下载",failed_load_img:"载入图像失败",open_with:"使用... 打开",play_with:"使用...播放",install:"安装",installing:"正在安装","tr-install":"巨魔商店","tr-installing":"巨魔正在安装",open_in_new_window:"在新窗口中打开",auto_next:"自动按序播放"},ao={list:"列表视图",grid:"网格视图",image:"图片视图"},no="当前文件夹没有图片哦",co="加载更多",po="* * * * *",lo="请输入密码",uo={local_settings_auto:"设置成功，即将自动刷新",more:"打开工具栏",close:"关闭工具栏",browser_setting:"浏览器设置",refresh:"刷新",toggle_theme:"主题切换",toggle_theme_auto:"自动切换主题",switch_lang:"切换语言",toggle_markdown_toc:"切换轮廓",toggle_checkbox:"复选框开关",rename:"重命名",input_new_name:"输入新名称","only_one-tips":"只能选择一个哦",move:"移动",copy:"复制",choose_dst_folder:"选择目标文件夹",delete:"删除","delete-tips":"确定要删除吗?",decompress:"解压缩","decompress-pass":"解压密码: ","decompress-cache-full":"将缓存内容全部存入临时文件","decompress-put-into-new":"解压到新的子文件夹",extract:"提取到",archive:{input_password:"请输入解压密码",incorrect_password:"密码不对哦",extract_header:"提取到 {{path}} ..."},copy_link:"复制链接",preview_page:"预览页面",down_link:"下载链接",encode_down_link:"编码下载链接",mkdir:"新建文件夹",input_dir_name:"输入文件夹名称",new_file:"新建文件",input_filename:"输入文件名",cancel_select:"取消选择",offline_download:"离线下载","offline_download-tips":"每行一条链接",delete_policy:{delete_on_upload_succeed:"上传成功后删除",delete_on_upload_failed:"上传失败时删除",delete_never:"从不删除",delete_always:"总是删除"},download:"下载",batch_download:"批量下载",package_download:"打包下载",package_download_disabled:"打包下载已禁用",playlist_download:"下载播放列表",send_aria2:"发送到 Aria2",aria2_not_set:"请设置 Aria2 RPC 网址",aria2_set_error:"任务发送失败，请检查配置",send_aria2_success:"成功发送到 Aria2","pre_package_download-tips":"在浏览器中使用streamsaver而不是服务器来进行包下载需要相应的存储支持cors,而不支持的存储将失败。","package_download-tips":"正在下载中，请不要关闭当前页面哦",upload:"上传",local_settings:"浏览器设置",recursive_move:"聚合移动","recursive_move_directory-tips":"您确定要将所有文件移动到指定的文件夹吗？",remove_empty_directory:"移除空的子目录","remove_empty_directory-tips":"您确定要删除所有空子文件夹吗？",batch_rename:"批量重命名",regex_rename:"正则表达式重命名",sequential_renaming:"顺序重命名",regex_rename_preview:"更改的文件",regex_rename_preview_old_name:"旧名称",regex_rename_preview_new_name:"新名称",regular_rename:"正则表达式文件重命名。 在第一行输入源文件名正则表达式，并在第二行输入新文件名正则表达式。",sequential_renaming_desc:"新文件名将有一个数值起始值附加到它， 并且它将通过向起始值添加 1 来按顺序显示。 在第一行输入新的文件名，并在第二行输入起始值。"},mo={add_as_task:"添加为任务",try_rapid:"尝试秒传","upload-tips":"拖动文件到此处以上传，或点击：",release:"松开以上传",no_files_drag:"没有文件被拖入。",upload_files:"选择文件",upload_folder:"选择文件夹",pending:"等待中...",uploading:"上传中",backending:"正在后台上传",success:"成功",error:"错误",back:"返回上传",stream:"流式",from:"表单",clear_done:"清空完成"},ho={aria2_rpc_url:"Aria2 RPC 链接",aria2_rpc_secret:"Aria2 RPC 密钥",aria2_dir:"Aria2 下载目录",show_folder_in_image_view:"在图片视图中显示文件夹",show_folder_in_image_view_options:{top:"上方",bottom:"下方",none:"不显示"},global_default_layout:"全局默认布局",global_default_layout_options:{list:"列表视图",grid:"网格视图",image:"图片视图"},position_of_header_navbar:"导航栏位置",position_of_header_navbar_options:{static:"常规固定模式",sticky:"磁贴在页面顶部",only_navbar_sticky:"只限磁贴导航栏"},show_sidebar:"左侧边栏",show_sidebar_options:{none:"隐藏",visible:"显示"},list_item_filename_overflow:"长文件名",list_item_filename_overflow_options:{ellipsis:"省略",scrollable:"可滚动",multi_line:"多行显示"},open_item_on_checkbox:"打开选中项",open_item_on_checkbox_options:{direct:"直接打开",dblclick:"双击打开",disable_while_checked:"选中时禁用"},filename_scrollable:"长文件名滚动条",grid_item_size:"图标大小",select_with_mouse:"用鼠标选择项目",select_with_mouse_options:{disabled:" 关闭",open_item_with_dblclick:"双击打开"}},fo={current_status:"当前状态",initializing:"正在初始化",fetching_struct:"正在获取内容",fetching_struct_failed:"获取内容失败",downloading:"稍等，别关闭页面哦",failed:"打包下载失败",success:"下载完成，太棒了！"},go={powered_by:"PeiFeng.Li",manage:"iSweet • 2025",guest:"iSweet • 2025"},ko={search:"搜索",no_result:"iSweet • Search",scopes:{all:"全部",folder:"目录",file:"文件"}},bo="请稍候，正在加载中...⏳",yo="用户信息验证失败：",wo={cancel_if_exists:"如果文件存在则取消",overwrite_existing:"覆盖现有文件",skip_existing:"跳过现有文件"},vo={obj:_o,preview:io,layouts:ao,no_images:no,load_more:co,no_more:po,input_password:lo,toolbar:uo,upload:mo,local_settings:ho,package_download:fo,footer:go,search:ko,fetching_settings_failed:bo,get_current_user_failed:yo,conflict_policy:wo},xo="搜索索引",Po="当前索引",So="构建索引",Do="重建索引",To="要更新索引的路径",Io="最大深度",Ao="更新索引",Co="对象计数",zo="上次完成时间",Lo="未知",Bo="停止",Oo="清除",Fo="错误",Uo={search_index:xo,current:Po,build:So,rebuild:Do,paths_to_update:To,max_depth:Io,update:Ao,obj_count:Co,last_done_time:zo,unknown:Lo,stop:Bo,clear:Oo,error:Fo},Mo="登录到",qo="记住账号",Vo="忘记密码？",jo="https://peifeng.li/messages",Go="清除",Eo="登录",Ho="游客",Ro="登录成功",Wo="获取帮助",No={login_to:Mo,"username-tips":"输入您的用户名","password-tips":"输入您的密码","otp-tips":"输入您的 OTP 代码",remember:qo,forget:Vo,forget_url:jo,clear:Go,login:Eo,use_guest:Ho,success:Ro,help:Wo},Qo={dashboard:"iSweet • 管理",settings:"设置",site:"站点",style:"样式",preview:"预览",global:"全局",other:"其他",users:"用户",storages:"存储",metas:"规则",profile:"个人",about:"关于",tasks:"任务",upload:"上传",copy:"复制",decompress:"解压","backup-restore":"系统",home:"主页",indexes:"索引",sso:"单点登录",docs:"文档",offline_download:"离线下载",ldap:"LDAP",s3:"S3",ftp:"FTP",traffic:"流量"},Xo="iSweet • 管理",Yo="请使用管理员帐户登录",Ko="退出成功",$o="发送",Zo="接收",Jo="收到的消息",es={sidemenu:Qo,title:Xo,not_admin:Yo,logout_success:Ko,send:$o,receive:Zo,received_msgs:Jo,"add_storage-tips":"您可能需要在新打开的选项卡中填写一些信息。","messenger-tips":"您可能需要在这个标签页中按提示填写一些信息。"},os="路径",ss="密码",ts="写入",rs="隐藏",_s="页面底部说明",is="在底部渲染一个Markdown,支持内容或链接",as="页面顶部说明",ns="在顶部渲染一个Markdown,支持内容或链接",ds="应用到子文件夹",cs="每行一个正则表达式",ps={path:os,password:ss,write:ts,hide:rs,readme:_s,readme_help:is,header:as,header_help:ns,apply_sub:ds,hide_help:cs},ls="允许索引",us="允许挂载",ms="站点公告",hs="Aria2 密钥",fs="Aria2 地址",gs="自动播放音频",ks="音频封面",bs="音频类型",ys="自动更新索引",ws="复制任务的最大进程数量",vs="自定义内容",xs="自定义头部",Ps="解压下载任务的最大工作线程数",Ss="解压上传任务的最大进程数量",Ds="默认每页数量",Ts="外部预览",Is="网站图标",As="文件名字符映射",Cs="过滤自述文件脚本",zs="转发直链参数",Ls="FTP 隐式 TLS",Bs="FTP 强制 TLS",Os="FTP PASV 端口地图",Fs="FTP 代理用户代理",Us="FTP 公共主机",Ms="FTP TLS 私钥路径",qs="FTP TLS 公开证书路径",Vs="隐藏文件",js="主容器",Gs={hope_container:"HOPE 容器",max_980px:"最大 1280 像素"},Es="首页图标",Hs="IFRAME 预览",Rs="忽略直接链接参数",Ws="忽略路径",Ns="图片类型",Qs="索引进度",Xs="LDAP 默认路径",Ys="LDAP 默认权限",Ks="启用 LDAP 登录",$s="LDAP 登录提示",Zs="LDAP 管理器 DN",Js="LDAP 管理员密码",et="LDAP 服务器",ot="LDAP 用户搜索基础",st="LDAP 用户搜索过滤器",tt="直链有效期",rt="图标",_t="主颜色",it="客户端的最大下行速率（KiB/s，负数无限制）",at="客户端的最大上行速率（KiB/s，负数无限制）",nt="最大索引深度",dt="驱动程序的最大下行速率（KiB/s，负数无限制）",ct="驱动程序的最大上行速率（KiB/s，负数无限制）",pt="离线下载任务的最大工作线程数",lt="离线下载传输任务的最大工作线程数",ut="OCR 接口",mt="打包下载",ht="分页类型",ft={all:"全部显示",auto_load_more:"自动加载",load_more:"加载更多",pagination:"分页显示"},gt="压缩文件预览",kt="隐私内容正则表达式",bt="代理忽略头部",yt="代理类型",wt="qBittorrent 做种时间",vt="qBittorrent 地址",xt="自述自动渲染",Pt="Robots.txt",St="S3 访问密钥 ID",Dt="S3 桶",Tt="S3 生成密钥",It="S3 访问密钥",At="您需要重启来应用本页设置",Ct="搜索索引",zt={bleve:"Bleve",database:"数据库",database_non_full_text:"数据库（非全文搜索）",meilisearch:"Meilisearch",none:"无"},Lt="设置布局",Bt={list:"列表",responsive:"响应式"},Ot="签名所有",Ft="网站标题",Ut="单点登录应用名称",Mt="SSO 自动注册",qt="单点登录客户端 ID",Vt="单点登录客户端机密",jt="SSO 兼容模式",Gt="SSO 默认路径",Et="SSO 默认权限",Ht="单点登录端点名称",Rt="SSO 额外范围",Wt="单点登录 JWT 公钥",Nt="启用单点登录",Qt="单点登录平台",Xt={Casdoor:"Casdoor",Dingtalk:"钉钉",Github:"GitHub",Google:"谷歌",Microsoft:"微软",OIDC:"OIDC"},Yt="SSO OIDC 用户名键",Kt="单点登录组织名称",$t="文本类型",Zt="令牌",Jt="做种时间",er="Transmission 地址",or="上传任务的最大进程数量",sr="版本",tr="自动播放视频",rr="视频类型",_r="启用 Webauthn 登录",ir={allow_indexed:ls,allow_mounted:us,announcement:ms,aria2_secret:hs,aria2_uri:fs,audio_autoplay:gs,audio_cover:ks,audio_types:bs,auto_update_index:ys,copy_task_threads_num:ws,customize_body:vs,customize_head:xs,decompress_download_task_threads_num:Ps,decompress_upload_task_threads_num:Ss,default_page_size:Ds,external_previews:Ts,favicon:Is,filename_char_mapping:As,filter_readme_scripts:Cs,forward_direct_link_params:zs,ftp_implicit_tls:Ls,ftp_mandatory_tls:Bs,ftp_pasv_port_map:Os,ftp_proxy_user_agent:Fs,ftp_public_host:Us,ftp_tls_private_key_path:Ms,ftp_tls_public_cert_path:qs,hide_files:Vs,home_container:js,home_containers:Gs,home_icon:Es,iframe_previews:Hs,ignore_direct_link_params:Rs,ignore_paths:Ws,"ignore_paths-tips":"每行一条路径",image_types:Ns,index_progress:Qs,ldap_default_dir:Xs,ldap_default_permission:Ys,ldap_login_enabled:Ks,ldap_login_tips:$s,ldap_manager_dn:Zs,ldap_manager_password:Js,ldap_server:et,ldap_user_search_base:ot,ldap_user_search_filter:st,link_expiration:tt,logo:rt,main_color:_t,max_client_download_speed:it,max_client_upload_speed:at,max_index_depth:nt,"max_index_depth-tips":"索引的最大深度",max_server_download_speed:dt,max_server_upload_speed:ct,offline_download_task_threads_num:pt,offline_download_transfer_task_threads_num:lt,ocr_api:ut,package_download:mt,pagination_type:ht,pagination_types:ft,preview_archives_by_default:gt,privacy_regs:kt,proxy_ignore_headers:bt,proxy_types:yt,qbittorrent_seedtime:wt,qbittorrent_url:vt,readme_autorender:xt,robots_txt:Pt,s3_access_key_id:St,s3_buckets:Dt,s3_generate:Tt,s3_secret_access_key:It,s3_restart_to_apply:At,search_index:Ct,search_indexs:zt,settings_layout:Lt,settings_layouts:Bt,sign_all:Ot,site_title:Ft,sso_application_name:Ut,sso_auto_register:Mt,sso_client_id:qt,sso_client_secret:Vt,sso_compatibility_mode:jt,sso_default_dir:Gt,sso_default_permission:Et,sso_endpoint_name:Ht,sso_extra_scopes:Rt,sso_jwt_public_key:Wt,sso_login_enabled:Nt,sso_login_platform:Qt,sso_login_platforms:Xt,sso_oidc_username_key:Yt,sso_organization_name:Kt,text_types:$t,token:Zt,transmission_seedtime:Jt,transmission_uri:er,upload_task_threads_num:or,version:sr,video_autoplay:tr,video_types:rr,webauthn_login_enabled:_r},ar="Aria2",nr="Aria2 版本：",dr="设置 aria2",cr="复制令牌",pr="重置令牌",lr="重置令牌成功",ur="未知类型",mr="设置 qBittorrent",hr="qBittorrent",fr="Transmission",gr="设置 Transmission",kr="设置 115",br="PikPak",yr="PikPak 缓存目录",wr="设置 PikPak",vr="Thunder",xr="设置 Thunder",Pr="Thunder 缓存目录",Sr="设置已完成",Dr={115:"115",aria2:ar,aria2_version:nr,set_aria2:dr,copy_token:cr,reset_token:pr,reset_token_success:lr,unknown_type:ur,set_qbit:mr,qbittorrent:hr,transmission:fr,set_transmission:gr,"115_temp_dir":"115 缓存目录",set_115:kr,pikpak:br,pikpak_temp_dir:yr,set_pikpak:wr,thunder:vr,set_thunder:xr,thunder_temp_dir:Pr,set_ok:Sr},Tr={mount_path:"挂载路径","mount_path-tips":"要挂载到的路径，它是唯一的，不能重复",driver:"驱动",order:"序号","order-tips":"用于排序",status:"状态",remark:"备注",cache_expiration:"缓存过期时间","cache_expiration-tips":"此存储的缓存过期时间(分钟)",down_proxy_url:"下载代理URL",web_proxy:"Web 代理",webdav_policy:"WebDAV 策略",proxy_range:"代理 Range","proxy_range-tips":"需要启用代理",webdav_policys:{"302_redirect":"302 重定向",use_proxy_url:"使用代理地址",native_proxy:"本地代理"},order_by:"排序",order_bys:{name:"名称",size:"大小",modified:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},extract_folder:"提取文件夹",extract_folders:{front:"提取到最前",back:"提取到最后"},enable_sign:"启用签名",disable_index:"禁用索引"},Ir={start_load_success:"开始加载",load_all:"全部重新加载",filter_by_driver:"按驱动筛选",table_layout:"视图"},Ar={common:Tr,other:Ir},Cr="下载文件到本地设备",zr="将下载的文件传输到相应的存储",Lr="上传文件到对应的存储",Br="将文件从一个存储复制到另一个存储",Or="下载并解压缩档案文件",Fr="将解压的文件上传到目标存储",Ur="已完成",Mr="运行中...",qr="删除已完成",Vr="重试",jr="重试失败项",Gr={0:"等待中...",1:"运行中...",2:"成功",3:"正在取消···",4:"已取消",5:"错误",6:"失败中…",7:"失败",8:"等待重试",9:"重试前置操作中"},Er="重试已选择",Hr="取消选中的",Rr="删除选中的",Wr="筛选器",Nr="展开",Qr="折叠...",Xr="全部展开",Yr="折叠所有",Kr={name:"名称",creator:"创建者",state:"状态",progress:"进度",operation:"操作",speed:"速度",copy:{src:"源路径",dst:"目标路径"},upload:{path:"路径"},offline_download:{url:"链接地址",path:"目标路径",transfer_src:"源路径",transfer_src_local:"源路径 (本地)",transfer_dst:"目标路径"},decompress:{src:"源路径",dst:"目标路径",inner:"内部路径",password:"解压密码"},time_elapsed:"用时",status:"状态",err:"错误"},$r="只显示我的任务",Zr={offline_download:Cr,offline_download_transfer:zr,upload:Lr,copy:Br,decompress:Or,decompress_upload:Fr,done:Ur,undone:Mr,clear_succeeded:qr,retry:Vr,retry_failed:jr,state:Gr,retry_selected:Er,cancel_selected:Hr,delete_selected:Rr,filter:Wr,expand:Nr,fold:Qr,expand_all:Xr,fold_all:Yr,attr:Kr,show_only_mine:$r},Jr={see_hides:"可以看到隐藏",access_without_password:"无需密码访问",offline_download:"添加离线下载任务",write:"创建目录或上传",rename:"重命名",move:"移动",copy:"复制",delete:"删除",webdav_read:"Webdav 读取",webdav_manage:"Webdav 管理",ftp_read:"FTP 读取",read_archives:"读取压缩",decompress:"解压档案",ftp_manage:"FTP 管理"},e_="用户名",o_="密码",s_="基本路径",t_="角色",r_="权限",__="停用",i_="已启用",a_="更新配置文件",n_="更新成功，请重新登录。",d_="修改用户名",c_="更改密码",p_="确认密码",l_="您两次输入不一致",u_="启用双重身份验证",m_="取消两步验证",h_="取消两步验证成功",f_="扫描二维码保存密钥",g_="或者手动输入密钥",k_="输入您的 2FA 验证码",b_="验证",y_="您不能在此修改任何内容。",w_="单点登录",v_="绑定单点登录平台",x_="解绑单点登录平台",P_="WebAuthn",S_="添加 Webauthn 凭据",D_="Webauthn 凭据添加成功！",T_="浏览器不支持或不安全",I_={heading:"SSH 密钥",add_heading:"添加新密钥",title:"标题",key:"密钥",fingerprint:"指纹码",last_used:"最后使用时间",operation:"操作"},A_={permissions:Jr,username:e_,password:o_,base_path:s_,role:t_,permission:r_,disabled:__,available:i_,update_profile:a_,update_profile_success:n_,change_username:d_,change_password:c_,"change_password-tips":"不想改密码请留空",confirm_password:p_,"confirm_password-tips":"重复您刚输入的密码",confirm_password_not_same:l_,enable_2fa:u_,cancel_2fa:m_,cancel_2fa_success:h_,"2fa_already_enabled":"已启用双重身份验证",scan_qr:f_,or_manual:g_,input_code:k_,verify:b_,"guest-tips":"您正在作为访客访问。",modify_nothing:y_,sso_login:w_,connect_sso:v_,disconnect_sso:x_,webauthn:P_,add_webauthn:S_,add_webauthn_success:D_,webauthn_not_supported:T_,ssh_keys:I_},o=Object.assign({"./br.json":b,"./drivers.json":Ie,"./global.json":ro,"./home.json":vo,"./index.json":t,"./indexes.json":Uo,"./login.json":No,"./manage.json":es,"./metas.json":ps,"./settings.json":ir,"./settings_other.json":Dr,"./storages.json":Ar,"./tasks.json":Zr,"./users.json":A_}),C_={};for(const e in o){const s=e.split("/")[1].split(".")[0];C_[s]=o[e]}export{C_ as default};
