using Microsoft.EntityFrameworkCore.Migrations;

namespace PlataformaTccSuporte.Migrations
{
    public partial class FinanceAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Card",
                newName: "title");

            migrationBuilder.RenameColumn(
                name: "Percentage",
                table: "Card",
                newName: "percentage");

            migrationBuilder.RenameColumn(
                name: "Describe",
                table: "Card",
                newName: "describe");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Card",
                newName: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "title",
                table: "Card",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "percentage",
                table: "Card",
                newName: "Percentage");

            migrationBuilder.RenameColumn(
                name: "describe",
                table: "Card",
                newName: "Describe");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Card",
                newName: "Id");
        }
    }
}
