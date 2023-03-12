function rotate(){

        $('.screen[data-index="6"]').attr('data-index','0')
        $('.screen[data-index="1"]').attr('data-index','6')
        $('.screen[data-index="2"]').attr('data-index','1')
        $('.screen[data-index="3"]').attr('data-index','2')
        $('.screen[data-index="4"]').attr('data-index','3')
        $('.screen[data-index="5"]').attr('data-index','4')
        $('.screen[data-index="0"]').attr('data-index','5')
        
}