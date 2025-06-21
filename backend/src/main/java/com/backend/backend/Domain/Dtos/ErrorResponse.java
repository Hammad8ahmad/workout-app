package com.backend.backend.Domain.Dtos;

public record ErrorResponse(
        int status,
        String message
) {
}
