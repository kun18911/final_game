
function StringToArray (strData) {
                        
    // Bước 1: Xử lý chuỗi
    // Loại bỏ dấu ngoặc vuông ở hai đầu
    let cleanedStr = strData.slice(1, -1); // Loại bỏ ký tự mở đầu '[' và ký tự đóng cuối ']'
    
    // Bước 2: Chuyển đổi thành mảng
    // Tách chuỗi thành các phần tử dựa trên dấu phẩy và loại bỏ khoảng trắng
    let arrData = cleanedStr.split(',');
    
    // Hiển thị kết quả
    return arrData

}
function giải_Ẩn_Ý(xx) {

    function convertString(input) {
        // Định nghĩa bản đồ chuyển đổi
        const conversionMap = {
            "kkki": "0",
            "mmmi": "1",
            "hhhi": "2",
            "eeei": "3",
            "bbbi": "4",
            "nnni": "5",
            "sssi": "6",
            "llli": "7",
            "ttti": "8",
            "ccci": "9",
            "-i": "_"
        };
    
        // Bắt đầu từ chuỗi ban đầu
        let result = input;
    
        // Thực hiện chuyển đổi dựa trên bản đồ
        for (let key in conversionMap) {
            let pattern = new RegExp(key, 'g');
            result = result.replace(pattern, conversionMap[key]);
        }
    
        // Trả về chuỗi kết quả sau khi chuyển đổi
        return result;
    }
    // Sử dụng hàm để chuyển đổi chuỗi value_Mã
    return convertString(xx);
}
function chuyển_Đổi_Số_Sang_Chữ(chuoiSo) {
    var quyTac = {
        "0": "kkk",
        "1": "mmm",
        "2": "hhh",
        "3": "eee",
        "4": "bbb",
        "5": "nnn",
        "6": "sss",
        "7": "lll",
        "8": "ttt",
        "9": "ccc"
    }

    var chuoiKiTu = "";
      
    for (let i = 0; i < chuoiSo.length; i++) {
        const so = chuoiSo[i];
        chuoiKiTu += quyTac[so];
    }; return chuoiKiTu
}
