using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PaymentAPI.Models;

public class PaymentDetail
{
    [Key]
    public int PaymentDetailId { get; set; }

    [Column(TypeName = "nvarchar(100)")]
    public required string CardOwnerName { get; set; }

    [Column(TypeName = "nvarchar(16)")]
    public required string CardNumber { get; set; }

    [Column(TypeName = "nvarchar(5)")]
    public required string ExpirationDate { get; set; }

    [Column(TypeName = "nvarchar(3)")]
    public required string SecurityCode { get; set; }

}
