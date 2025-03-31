function main(){
    let emails=["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"];
    if(emails.length==0){
        document.writeln(`mảng không có phần tử nào`);
        return;
    }
    document.writeln(emails.filter(word => word.includes('@')&& !word.includes(' ')));
}
main();