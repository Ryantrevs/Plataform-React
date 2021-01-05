using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PlataformaTccSuporte.Migrations
{
    public partial class AddedFinanceContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FinanceId",
                table: "Income",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FinanceId",
                table: "Expenses",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Finance",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    InitialPeriod = table.Column<DateTime>(nullable: false),
                    FinalPeriod = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Finance", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Income_FinanceId",
                table: "Income",
                column: "FinanceId");

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_FinanceId",
                table: "Expenses",
                column: "FinanceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_Finance_FinanceId",
                table: "Expenses",
                column: "FinanceId",
                principalTable: "Finance",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Income_Finance_FinanceId",
                table: "Income",
                column: "FinanceId",
                principalTable: "Finance",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_Finance_FinanceId",
                table: "Expenses");

            migrationBuilder.DropForeignKey(
                name: "FK_Income_Finance_FinanceId",
                table: "Income");

            migrationBuilder.DropTable(
                name: "Finance");

            migrationBuilder.DropIndex(
                name: "IX_Income_FinanceId",
                table: "Income");

            migrationBuilder.DropIndex(
                name: "IX_Expenses_FinanceId",
                table: "Expenses");

            migrationBuilder.DropColumn(
                name: "FinanceId",
                table: "Income");

            migrationBuilder.DropColumn(
                name: "FinanceId",
                table: "Expenses");
        }
    }
}
