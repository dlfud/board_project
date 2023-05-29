package com.board.controller;

import com.board.dao.BoardRepository;
import com.board.domain.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController()
@RequiredArgsConstructor
//@RequestMapping("/board")
public class boardController {
    private final BoardRepository boardRepository;

    //목록보기
    @GetMapping("board/list")
    public List<Board> getBoardList(){
        return boardRepository.findAll();
    }

    //상세보기
    @GetMapping("board/detail/{id}")
    public Board getBoard(@PathVariable("id") int id){
        return boardRepository.findById(id).get();
    }

    //작성하기
    @PostMapping("board/write")
    public String createBoard(@RequestBody Board board){
        board.setCreateDate(LocalDateTime.now());
        board.setUpdateDate(LocalDateTime.now());
        boardRepository.save(board);
        return "success";
    }
    
    //수정하기
    @PostMapping("board/update/{id}")
    public String updateBoard(@PathVariable("id") int id, @RequestBody Board board){
        Board updateBoard = boardRepository.findById(id).get();
        updateBoard.setSubject(board.getSubject());
        updateBoard.setUserName(board.getUserName());
        updateBoard.setContent(board.getContent());
        updateBoard.setUpdateDate(LocalDateTime.now());
        boardRepository.save(updateBoard);
        return "success";
    }
}
